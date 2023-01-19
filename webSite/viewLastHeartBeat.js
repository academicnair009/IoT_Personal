const express = require('express')
const port = 3000
app = express();

// initialize lastVisit
var lastVisit = 0;

// We need to parse the body of the post request
// from Node-RED
var bodyParser = require('body-parser')
// and we need to parse JSON data
app.use(bodyParser.json() );

// Handle a visit from a browser calling with GET.
// return the last visit of Node-RED.
app.get('/ViewLastHeartBeat', (req, res) => {
  console.log('Browser visit for last heartbeat');
  // respond to browser
  res.send('Last time Argon visited via Node-RED ' + lastVisit);
})

// This function is called with an HTTP POST by Node-RED.
// The HTTP request has a content-type header set to
// application/json.
// The JSON data has deviceID, time, and onTime values.
app.post('/SetNewHeartBeat', function (req, res) {
  console.log('Visit from Argon ');
  console.log(req.body);
  console.log(req.body.deviceID)
  lastVisit = req.body.time;
  // respond to Node-RED
  res.send('Argon update received');
})

app.listen(port, () => {
  console.log(`Browser views last heartbeat at http://localhost:${port}/ViewLastHeartBeat`)
})
