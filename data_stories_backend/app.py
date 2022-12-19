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
#from waitress import serve
#from applicationinsights.flask.ext import AppInsights
import functions

app = Flask(__name__)
CORS(app,resources={r"*":{"origins":"*"}})
#app.config['APPINSIGHTS_INSTRUMENTATIONKEY'] = '45e828dd-0e3a-43fa-b586-4c0167c2c9ed'
#appinsights = AppInsights(app)

# force flushing application insights handler after each request
# @app.after_request
# def after_request(response):
#     appinsights.flush()
#     return response

#
prod = 'http://admin:innoprojekt@20.107.50.230:5984/'
local = 'http://admin:admin@localhost:5984/'

couch = couchdb.Server(local)

try:
	db = couch['datastories']
except:
	db = couch.create('datastories')

#scaler1, lgr1 = lgr()
# @app.after_request
# def after_request(response):
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#     response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
#     return response
@app.route('/', methods=['GET'])
def base():
	return simplejson.dumps({'status': "okay"})

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

	try:
		xspecial = base64.b64encode(db.get_attachment(y[0]['_id'],y[0]['images']['filename']).read())
	except:
		xspecial = ''
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
	try:
		foilnumber = request_data['foilnumber']
	except:
		foilnumber = 0
	
	phase = request_data['phase']
	
	
	if component == 'template0':
		content_of_template = functions.save_component0(request_data)
	
	if component == 'template1':
		content_of_template = functions.save_component1(request_data)

	if component == 'template2':
		content_of_template = functions.save_component2(request_data)

	if component == 'template4':
		print(" in template4")
		if phase == 1:
			answeredform = request_data['answeredform']
		else: content_of_template = {
			"component" : component,
			"jsonForm" : request_data['jsonForm']
		}
	doc_id = get_datastory_id(name)
	
	if doc_id != '':
		doc = db.get(doc_id)
		if component == 'template1' and phase == 0:
			doc['phase'] = phase
			doc['content'].append(content_of_template)

		elif component == 'template1' and phase == 1:
			doc['phase'] = phase
			doc['content'][foilnumber]['answers'] = content_of_template
			
		if component == 'template2' and phase == 0:
			doc['phase'] = phase
			doc['content'].append(content_of_template)

		elif component == 'template2' and phase == 1:
			doc['phase'] = phase
			doc['content'][foilnumber]['answers'] = content_of_template

		if component == 'template4' and phase == 0:
			doc['phase'] = phase
			doc['content'].append(content_of_template)

		elif component == 'template4' and phase == 1:
			doc['phase'] = phase
			doc['content'][foilnumber]['answeredform'] = answeredform

		if component == 'survey':
			doc['survey'] = request_data['feedback']
			
	else: doc = {'_id': uuid4().hex, 'datastory': name, 'phase' : phase, 'content': [
		content_of_template
			]#}
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

if __name__ == '__main__':
	app.run()