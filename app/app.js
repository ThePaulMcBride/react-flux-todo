var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var router = require('./routes/routes')

//Databse
require('./config/database');

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(router);

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
