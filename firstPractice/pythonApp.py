#!flask/bin/python
import requests

from flask import Flask, jsonify

app = Flask(__name__)



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