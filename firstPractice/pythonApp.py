#!flask/bin/python
import requests
from flask import Flask

app = Flask(__name__)

@app.route('/hello/world', methods = ['GET'])
def index():
    #next getting remote data from another API
    print("plz plz plz")
    return "Hello, remote data!"

@app.route('/hello/anworld', methods = ['GET'])
def anotherWorld():
    return "Hello, ANNOOOOOOWorld!"

@app.route('/weather', methods = ['GET'])
def weatherWorld():
    temp = requests.get('http://api.wunderground.com/api/d49d5cb80f0fc383/conditions/q/CA/San_Francisco.json').content
    print(temp)
    return temp

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

if __name__ == '__main__':
    app.run(debug=True)