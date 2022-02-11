
console.log('Server-side code running');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const Http = new XMLHttpRequest;
//const url = 'https://www.instagram.com/';

const express = require('express');
const fetch = require('node-fetch'); // import node js

const app = express();


// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('Starting on 8080');
});

// serve the homepage
app.get('/', (req, res) => { 
  res.sendFile(__dirname + '/index.html');
});





/*
#variable
$kontrol = $_REQUEST['kontrol'];


if($kontrol==''){
    $url = "http://192.168.1.4/30000/";
}
else{
    $url = "http://192.168.1.4/30000/$kontrol";
}
*/