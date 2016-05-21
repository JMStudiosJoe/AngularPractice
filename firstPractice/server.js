var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res){
	
	console.log("----------");
	console.log(__dirname);
	console.log("----------");
	res.sendFile('public/index.html' , { root: __dirname });
});

app.use(express.static('.'))


var port = (process.env.VCAP_APP_PORT || 8000);
app.listen(port);
console.log("mobile backend app is listening at " + port);