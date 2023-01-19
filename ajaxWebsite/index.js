// index.js
// A directory named "public" is available in the current directory.
// The public directory holds html and javascript files.
// The public directory holds the main page: index.html.
// A browser will visit with http://localhost:3000/index.html

const express = require('express')
const port = 3000
app = express();
// allow access to the files in public
app.use(express.static('public'));

// initialize lastVisit
var lastVisit = "";
var lastVisitDate = new Date();

// initialize deviceID
var deviceID = "";

// initialize onTime
var onTime = true;

var storedDate = new Date();

// We need to parse the body of the post request
// from Node-RED
var bodyParser = require('body-parser')
// and we need to parse JSON data
app.use(bodyParser.json() );

// handle an AJAX visit from a browser
// return the last visit of the Argon
app.get('/getStatusInJSON', (req, res) => {
  console.log('Browser AJAX for last visit time');
  storedDate = new Date(); // current time
  // Logic needed here
  var returnObj = {"lastVisit" : lastVisit, "deviceID" : deviceID, "onTime" : onTime};
  // respond to browser
  res.send(JSON.stringify(returnObj));
})

// Called with an HTTP POST by Node-RED
// The HTTP request has a content-type header set to
// application/json.
// The JSON data has deviceID, time, and onTime values.
app.post('/SetNewHeartBeat', function (req, res) {
  console.log('Visit from Argon ');
  console.log(req.body);
  console.log(req.body.deviceID)
  lastVisit = req.body.time;
  deviceID = req.body.deviceID;
  lastVisitDate = new Date(lastVisit);
  onTime = req.body.onTime;
  console.log("On time == " + onTime);

  // respond to Node-RED
  res.send('Argon visit')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/index.html`)
})
