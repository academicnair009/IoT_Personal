// Open a new WebSocket connection (ws), use wss for secure connection
var wsUri = 'ws://localhost:6969';
var websocket = new WebSocket(wsUri);

//Optional callback, invoked if a connection error has occurred
websocket.onerror = function(evt) { onError(evt) };
function onError(evt) {
    //writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}
// Optional callback, invoked when the connection is terminated
websocket.onclose = function() { alert('Connection closed'); }

// For testing purposes
// var output = document.getElementById("output");

// Optional callback, invoked when a WebSocket connection is established
websocket.onopen = function(evt) {
setInterval(function() {
var currentRequestTime = new Date();
if(msgObj){
var differenceInSeconds = (currentRequestTime.getTime() - new
Date(msgObj.time).getTime())/1000;
if(differenceInSeconds >= 12){
msgObj.time = "Suspected Failure";
updateStatus(JSON.stringify(msgObj));
}
} else{
msgObj = {
time: "Suspected Failure"
};
updateStatus(JSON.stringify(msgObj));
}
}, 12000);
	onOpen(evt)
};
function onOpen() {
    // writeToScreen("Connected to " + wsUri);
}

/* optional
function writeToScreen(message) {
    output.innerHTML += message + "<br>";
}
*/
// A callback function invoked for each new message from the server
websocket.onmessage = function(evt) { onMessage(evt) };
function onMessage(evt) {
    console.log("received: " + evt.data);
websocket.onmessage = function(evt) { onMessage(evt) };
async function onMessage(evt) {
let evtData = await evt.data.text();
console.log("received: " + evtData);
msgObj = JSON.parse(evtData);
updateStatus(evtData);
}    


// Client-initiated send text to the websocket
function sendText(msg) {
    console.log("sending text: " + msg);
    websocket.send(msg);
}

