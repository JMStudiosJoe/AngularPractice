#!flask/bin/python

#http://flask.pocoo.org/docs/0.10/patterns/sqlalchemy/
#http://flask-sqlalchemy.pocoo.org/2.1/
import requests

from flask import Flask, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
from flask_alembic import Alembic

app = Flask(__name__)

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'd+y7,8nf9F,w'
app.config['MYSQL_DATABASE_DB'] = 'EmpData'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
db = SQLAlchemy(app)

@app.route('/hello/world', methods = ['GET'])
def index():
    #next getting remote data from another API
    print("plz plz plz")
    return "Hello, remote data!"

@app.route('/weather', methods = ['GET'])
def weatherWorld():
    namesOfPlances = ['San_Jose', 'San_Francisco', 'Davis', 'Campbell']
    weatherArrayOfData = []
    #temp = requests.get('http://api.wunderground.com/api/d49d5cb80f0fc383/conditions/q/CA/San_Francisco.json').content
    for name in namesOfPlances:
        #print('http://api.wunderground.com/api/d49d5cb80f0fc383/conditions/q/CA/'+name+'.json')
        temp = requests.get('http://api.wunderground.com/api/d49d5cb80f0fc383/conditions/q/CA/'+name+'.json').content
        weatherArrayOfData.append(temp)

    dump = jsonify(results = weatherArrayOfData)
    return dump

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,application/json')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

if __name__ == '__main__':
    app.run(debug=True)