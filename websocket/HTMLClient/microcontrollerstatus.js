function updateStatus(msg) {
// parse json message to create an object
var msgObj = JSON.parse(msg);
// get the deviceID
var id = msgObj.deviceID;
// get the time
var time = msgObj.time;
// find location in document to write
var contents = document.getElementById("output");
// clear the existing output
contents.innerHTML = "";
// create a new list item tag
var listItem = document.createElement("li");
// add the tag with status data
var currentRequestTime = new Date();
var differenceInSeconds = (currentRequestTime.getTime() - new
Date(time).getTime())/1000;
if(differenceInSeconds < 12)
listItem.appendChild(document.createTextNode(id+" arrived at "+time));
else
listItem.appendChild(document.createTextNode("Suspected Failure!"));
// place it in the document
contents.appendChild(listItem);
}
