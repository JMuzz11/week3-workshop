var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(path.join(__dirname, 'www')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/homeroute').route(app);
require('./routes/loginformroute').route(app);
require('./routes/accountroute').route(app);
require('./routes/loginvalidate').route(app);

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;3
    console.log("My first NodeJS server");
    console.log("Server listening on: " + host + " Port: " + port);
});

