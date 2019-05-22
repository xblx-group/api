var express = require('express');
var app = express();
var masterPass = 0; //put your NUMERICAL pass

var users = [
{
	XblXtoken: 0, //Test user
	VKtoken: ""}
];

function genToken(){
	//TODO
	return users.size();
};

app.get('/login', function (req, res) {
	vk = req.param("VKtoken");
	xblx = req.param("XblXtoken");
	
	users.forEach(function(a, b, c){
		if(a.XblXtoken == xblx){
			res.send("OK");
			}
		}
	);
	res.send("ERR " + xblx);
	
});
app.get('/getUser', function (req, res) {
	id = req.param('id');
	res.send(users[id]);
});
	
	
	
app.get('/reg', function (req, res) {
	mp = req.param("Pass");
	if(mp == masterPass){
		resu += genToken();
		users.add({XblXtoken: genToken(), VKtoken: ""});
	}
	res.send("OK");
});
		

app.get('/', function (req, res) {res.send('pong');}); 

app.listen(8000, function () {
  console.log('working...');
});
