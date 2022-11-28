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


prod = 'http://admin:admin@couchdb.azurewebsites.net'

couch = couchdb.Server('http://admin:admin@localhost:5984/')
db = couch['datastories']

app = Flask(__name__)
CORS(app)
app.config.from_pyfile('config.py')

server = Server()
scaler1, lgr1 = lgr()

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
		match counter:
			case 1: doc_id += char
			case 3: break

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
		match counter:
			case 1: doc_id += char
			case 3: break
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
	# names = []
	# for item in db.view('_design/d1/_view/new-view'):
	# 	names.append(item.key)
	
	# return simplejson.dumps(names)	
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
	# for item in db.view('_all_docs',datastory=name):
	# #for item in db.view('_design/d1/_view/new-view',key=name):
	# 	items.append([item.key,item.value])
	print(y)
	datastory = y[0]['datastory']
	content = y[0]['content']
	dic = {'datastory' : y[0]['datastory'],
		   'content' : y[0]['content']} 
	#dict.fromkeys(['datastory,foilnumber,content'],[y[0]['datastory'],y[0]['foilnumber'],y[0]['content']])
	#dic.keys
	items.extend([datastory, content])
	
	return simplejson.dumps(dic)

@app.route('/createds', methods=['POST'])
def register():
	request_data = request.get_json()
	component = request_data['template']
	name = request_data['datastory']
	foilnumber = request_data['foilnumber']
	headline = request_data['headline']
	phase = request_data['phase']
	
	if component == 'template0':
		adressat = request_data['adressat']
		stand = request_data['stand']
		try:
			datensatz = request_data['datensatz']
		except KeyError:
			datensatz = ''
		zeitraum_von = request_data['zeitraum_von']
		zeitraum_bis = request_data['zeitraum_bis']
		messungsintervall = request_data['messungsintervall']
		eintraege = request_data['eintraege']
		specifics = {
			"component" : component,
			"headline" : headline,
			"adressat" : adressat,
			"stand" : stand,
			"datensatz" : datensatz,
			"zeitraum_von" : zeitraum_von,
			"zeitraum_bis" : zeitraum_bis,
			"messungsintervall" : messungsintervall,
			"eintraege:": eintraege
		}
	
	if component == 'template1':
		questions = request_data['questions']
		answers = request_data['answers']
		images = request_data['images']
		specifics = {
			"component" : component,
			"headline" : headline,
			"questions" : questions,
			"answers" : answers,
			"images" : images
		}
		
	if component == 'template2':
		jsonForm= request_data['jsonForm']
		specifics = {
			"component" : component,
			"jsonForm" : jsonForm
		}

	mango = {'selector': {'datastory': name}}
	y= list(db.find(mango))
	print(y)
	s = ''.join(str(x) for x in y)
	counter = 0
	doc_id = ''
	for char in s:
		if char == "'":
			counter += 1
			continue
		match counter:
			case 1: doc_id += char
			case 3: break
	
	if doc_id != '':
		doc = db.get(doc_id)
		rev  = doc["_rev"]
		print(type(doc))
	
		#doc['content'][f'content_foilnumber_{foilnumber}'] = json.dumps(specifics)
		doc = {'_id': doc_id, '_rev' : rev, 'datastory': name, 'phase' : phase, 'content': [{ f'content_foilnumber_{foilnumber}' :
		json.dumps(specifics)}]
		}
		
	else: doc = {'_id': uuid4().hex, 'datastory': name, 'phase' : phase, 'content': [{ f'content_foilnumber_{foilnumber}' :
		json.dumps(specifics)}]
		}
	
	db.save(doc)

	return simplejson.dumps({'ok': ''})

@app.route('/images', methods=['POST'])
def upload_files():
	try:
		file = request.files["image"]
		ds_name = file.filename.split('_')[0]
		print(ds_name)
	except:
		print("Fehler bei request: ",file.filename)

	counter = 0
	mango = {'selector': {'datastory': ds_name}}
	y= list(db.find(mango))
	print(y)
	s = ''.join(str(x) for x in y)
	doc_id = ''
	rev_id = ''
	for char in s:
		if char == "'":
			counter += 1
			continue
		match counter:
			case 1: doc_id += char
			case 3: rev_id += char
			case 4: break
			
	doc = {
		  	"_id": doc_id,
  			"_rev": rev_id
		}
	print (doc)
	db.put_attachment(content=file,doc=doc,filename=file.filename)
	return simplejson.dumps({'ok': "state"})

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
		match counter:
			case 1: doc_id += char
			case 3: rev_id += char
			case 4: break
			
	doc = {
		  	"_id": doc_id,
  			"_rev": rev_id,
  			"datastory": ds_name
		}
	db.put_attachment(content=file,doc=doc,filename=file.filename)
	return simplejson.dumps({'ok': "state"})

@app.route('/data', methods=['POST'])
def fetchData():
	request_data = request.get_json()
	druck = request_data['druck']
	leck = request_data['leck']
	status = classification(druck,leck,scaler1,lgr1)

	return simplejson.dumps(int(status))
