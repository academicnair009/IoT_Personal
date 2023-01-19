// ArgonStatus.js

// A call on getStatus causes an HTTP GET request back to the server.
// The response data is available to the updateStatus function.
function getStatus() {

    var req = newXMLHttpRequest();

    req.onreadystatechange = getReadyStateHandler(req, updateStatus);

    req.open("GET", "getStatusInJSON", true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send();
}

// Call back handler to update the HTML
// when a response arrives
function updateStatus(statusJSON) {
    // create an object from the JSON string
    var statusObj =JSON.parse(statusJSON);
    var time = statusObj.lastVisit;
    var deviceID = statusObj.deviceID
    var onTime = statusObj.onTime;
    // place the response data in the HTML
    document.getElementById("lastVisit").innerHTML = time;
    document.getElementById("deviceID").innerHTML = deviceID;
    document.getElementById("onTime").innerHTML = onTime;
}

