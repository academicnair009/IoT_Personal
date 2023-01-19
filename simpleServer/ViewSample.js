// ViewSimpleMessage.js
// Display a simple message on a browser
const http = require("http");
const host = 'localhost';
const port = 8000;
// The req variable will hold request information from the browser.
// The res variable is used to send results back to the browser.

const simpleListener = function (req, res) {
    res.writeHead(200);
    res.end("A simple text message on a browser");
};

// Associate the server with the listener
const server = http.createServer(simpleListener);

// Begin handling browser visits
server.listen(port, host, () => {
    // runs when listening begins
    console.log(`Server is running on http://${host}:${port}`);
});
