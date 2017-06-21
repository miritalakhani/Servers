// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// // Use the twitter package inside the response to also return a random tweet


var http = require('http');

var PORTFIRST = 7000;
var PORTSECOND = 7500;

function handleRequestONE(request, response) {
    console.log('YAY a First request was made.');
   // response.end('YAY a First request was made.');
    response.end(JSON.stringify ({
    message : 'YAY a First request was made.' }));
}


function handleRequestTWO(request, response) {
    console.log('YAY a Second request was made.');
    response.end('YAY a second request was made.');
}


var serverfirst = http.createServer(handleRequestONE);
var serversecond = http.createServer(handleRequestTWO);

serverfirst.listen(PORTFIRST);
serversecond.listen(PORTSECOND);

//request are coming from browser 
// i need to go to gc and enter http://localhost:7000/ 