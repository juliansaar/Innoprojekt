import base64
import os
from uuid import uuid4
from flask import Flask, request
from couchdb import Server
from flaskext.couchdb import Document
from flaskext.couchdb import CouchDBManager
from couchdb import Server
import couchdb
import json
import simplejson
from flask_cors import CORS
from dichte import classification, lgr
from waitress import serve
import functions


prod = 'http://admin:admin@couchdb.azurewebsites.net:5984'
dev = 'http://admin:admin@localhost:5984/'
test = 'http://admin:password@172.17.0.2:5984/'
couch = couchdb.Server(dev)

try:
	db = couch['datastories']
except:
	db = couch.create('datastories')

app = Flask(__name__)
CORS(app)
app.config.from_pyfile('config.py')

#server = Server()
if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000)
    #serve(app, host="0.0.0.0", port=os.getenv("PORT", default=5000))
#scaler1, lgr1 = lgr()

@app.route('/fetchDoneDatastories', methods=['GET'])
def fetchDoneDatastories():
	datastories = []
	mango = {'selector': {"phase" : 1}}
	y= list(db.find(mango))
	for index, t in enumerate(y):
		datastories.append(y[index]['datastory']) 
	 
	return simplejson.dumps(datastories)

@app.route('/fetchNotAnsweredDatastories', methods=['GET'])
def fetchNames():
	datastories = []
	mango = {'selector': {"phase" : 0}}
	y= list(db.find(mango))
	for index, t in enumerate(y):
		datastories.append(y[index]['datastory']) 
	 
	return simplejson.dumps(datastories)


@app.route('/fetchDatastory', methods=['POST'])
def fetchDatastory():
	request_data = request.get_json()
	name = request_data['datastory']
	items = []

	mango = {'selector': {'datastory': name}}
	y= list(db.find(mango))
	print(y[0]['_id'])

	try:
		xspecial = base64.b64encode(db.get_attachment(y[0]['_id'],y[0]['images']['filename']).read())
	except:
		xspecial = ''
	print(y)
	datastory = y[0]['datastory']
	content = y[0]['content']
	dic = {'datastory' : y[0]['datastory'],
		   'content' : y[0]['content'],
		   'imgs' : xspecial} 

	items.extend([datastory, content])
	
	return simplejson.dumps(dic)


@app.route('/createds', methods=['POST'])
def register():
	request_data = request.get_json()
	component = request_data['template']
	name = request_data['datastory']
	foilnumber = request_data['foilnumber']
	phase = request_data['phase']
	
	if component == 'template0':
		content_of_template = functions.save_component0(request_data)
	
	if component == 'template1':
		content_of_template = functions.save_component1(request_data)

	if component == 'template2':
		jsonForm = request_data['jsonForm']
		content_of_template = {
			"component" : component,
			"jsonForm" : jsonForm
		}
		print(content_of_template)

	doc_id = get_datastory_id(name)
	
	if doc_id != '':
		doc = db.get(doc_id)
		if component == 'template1':
			doc['phase'] = phase
			doc['content'][foilnumber-1][f'content_foilnumber_{foilnumber}']['answers'] = content_of_template

		if component == 'template2':
			doc['content'][foilnumber-1][f'content_foilnumber_{foilnumber}']['jsonForm'] = jsonForm
		
	else: doc = {'_id': uuid4().hex, 'datastory': name, 'phase' : phase, 'content': [{ f'content_foilnumber_{foilnumber}' : 
		content_of_template
			}]
		}
	
	db.save(doc)

	return simplejson.dumps({'ok': ''})

@app.route('/images', methods=['POST'])
def upload_files():
	try:
		file = request.files["images"]
		ds_name = file.filename.split('_')[0]
		print(ds_name)
	except:
		print("Fehler bei request: ",file.filename)

	doc_id = get_datastory_id(ds_name)
			
	doc = db.get(doc_id)
	doc['images'] = {
		"filename" : file.filename,
		"foilnumber" : 'content_foilnumber_1'
	}
	db.save(doc)
	db.put_attachment(content=file,doc=doc,filename=file.filename)
	return simplejson.dumps({'ok': "state"})


@app.route('/data', methods=['POST'])
def fetchData():
	request_data = request.get_json()
	druck = request_data['druck']
	leck = request_data['leck']
	status = classification(druck,leck,scaler1,lgr1)

	return simplejson.dumps(int(status))

def get_datastory_id(name):
    mango = {'selector': {'datastory': name}}
    y = list(db.find(mango))
    try:
        doc_id = y[0]['_id']
    except:
        doc_id = ''
    return doc_id

# legacy
@app.route('/image', methods=['POST'])
def upload_file():
	try:
		file = request.files["image"]
		ds_name = file.filename.split('_')[0]
	except:
		print("Fehler bei request: ",file.filename)

	counter = 0
	mango = {'selector': {'datastory': ds_name}}
	y= list(db.find(mango))
	s = ''.join(str(x) for x in y)
	doc_id = ''
	rev_id = ''
	for char in s:
		if char == "'":
			counter += 1
			continue
		if counter == 1:
			doc_id += char
		elif counter == 3:
			rev_id += char
		elif counter == 4: 
			break
			
	doc = {
		  	"_id": doc_id,
  			"_rev": rev_id,
  			"datastory": ds_name
		}
	db.put_attachment(content=file,doc=doc,filename=file.filename)
	return simplejson.dumps({'ok': "state"})


@app.route('/fetchimg/dichte', methods=['GET'])
def fetchDichte():
	mango = {'selector': {'datastory': 'dichte'}}
	y= list(db.find(mango))
	s = ''.join(str(x) for x in y)
	counter = 0
	doc_id = ''
	for char in s:
		if char == "'":
			counter += 1
			continue
		if counter == 1:
			doc_id += char
		elif counter == 3: 
			break

	x = {f'dichte_{i}' : base64.b64encode(db.get_attachment(doc_id,f'dichte_{i}').read()) for i in range(3,6)}

	return simplejson.dumps(x)

@app.route('/fetchimg/kaffee', methods=['GET'])
def fetchKaffee():
	mango = {'selector': {'datastory': 'kaffee'}}
	y= list(db.find(mango))
	s = ''.join(str(x) for x in y)
	counter = 0
	doc_id = ''
	for char in s:
		if char == "'":
			counter += 1
			continue
		if counter == 1:
			doc_id += char
		elif counter == 3: 
			break
	xspecial = {f'kaffee_3_{i}' : base64.b64encode(db.get_attachment(doc_id,f'kaffee_3_{i}').read()) for i in range(1,4)}
	x = {f'kaffee_{i}' : base64.b64encode(db.get_attachment(doc_id,f'kaffee_{i}').read()) for i in range(4,6)}
	g = xspecial | x
	return simplejson.dumps(g)

@app.route('/fetchds', methods=['GET'])
def fetchDs():
	
	request_data = request.get_json()
	name = request_data['datastory']
	items = []

	mango = {'selector': {'done': 'true'}}
	y= list(db.find(mango))

	datastory = y[0]['datastory']
	content = y[0]['content']
	dic = {'datastory' : y[0]['datastory'],
		   'content' : y[0]['content']} 
	
	items.extend([datastory, content])
	
	return simplejson.dumps(dic)