var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require("mysql");

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


app.get("/getWatchVideo", function(req, res) {
  var query = con.query('SELECT FROM video WHERE video.status = 1', data, function(err, result) {
    res.send(result);
  });
});

app.get("/getUnwatchVideo", function(req, res) {
  var query = con.query('SELECT FROM video WHERE video.status = 0', data, function(err, result) {
    res.send(result);
  });
});


app.get("/addVideo", function(req, res) {

  // var data = JSON.parse(req.query);
  var data  = { title: 'Hello MySQL','status':1};

  var query = con.query('INSERT INTO video SET ?', data, function(err, result) {
    res.send(result);
  });
});

app.get("/getVideos", function(req, res) {
  con.query('SELECT * FROM video',function(err,rows){
    if(err) throw res.send(err);
    res.send(rows);
  });
});

  app.get("/", function(req, res) {
    res.send("Filmdash API");
});

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
