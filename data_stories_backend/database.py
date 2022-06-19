from couchdb import Server
import couchdb

couch = couchdb.Server('https://admin:admin@localhost:5984/')
db = couch['datastories']

doc = {'foo': 'bar'}
db.save(doc)