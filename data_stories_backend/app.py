import base64
from uuid import uuid4
from flask import Flask, request
from couchdb import Server
from flaskext.couchdb import Document
from flaskext.couchdb import CouchDBManager
from couchdb import Server
import couchdb
import simplejson
from flask_cors import CORS

couch = couchdb.Server('http://admin:admin@localhost:5984/')
db = couch['datastories']

app = Flask(__name__, static_url_path='/static')
CORS(app)
app.config.from_pyfile('config.py')
# app.debug=True
server = Server()


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


@app.route('/createds', methods=['POST'])
def register():
	request_data = request.get_json()
	name = request_data['datastory']
	length = request_data['length']
	adressat = request_data['adressat']
	stand = request_data['stand']
	datensatz = request_data['datensatz']
	zeitraum = request_data['zeitraum']
	messungsintervall = request_data['messungsintervall']
	eintraege = request_data['eintraege']
	doc = {'_id': uuid4().hex, 'datastory': name, 'length' : length,'erstefolie' :{
		"adressat" : adressat,
  		"stand" : stand,
  		"datensatz" : datensatz,
  		"zeitraum" : zeitraum,
  		"messungsintervall" : messungsintervall,
  		"eintraege:": eintraege
	}}
	db.save(doc)

	return simplejson.dumps({'ok': ''})


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