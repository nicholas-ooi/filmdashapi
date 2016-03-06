var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "filmdash"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end(function(err) {
});


app.get("/", function(req, res) {

  // con.query('SELECT * FROM employees',function(err,rows){
  //   if(err) throw err;
  //
  //   console.log('Data received from Db:\n');
  //   console.log(rows);
  // });
    res.send("Hello World");
});

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
