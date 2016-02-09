var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.listen(process.env.PORT, process.env.IP);
console.log("server running on port");
