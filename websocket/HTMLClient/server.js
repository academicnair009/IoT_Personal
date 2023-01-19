// server.js

const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/websocket.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/websocket.js'));
});

app.get('/microcontrollerstatus.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/microcontrollerstatus.js'));
});
app.listen(port);
console.log('Web server started at http://localhost:' + port);
