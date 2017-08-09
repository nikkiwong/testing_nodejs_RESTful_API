var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, resp){
    resp.send("Hello and welcome to my bookstore app");
});

app.listen(3000);
console.log("Running on port 3000...")


// const http = require('http'); //http is a core model
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// fs.readFile('index.html', (err, html) => {
//     if(err){
//         throw err;
//     }

//     const server = http.createServer((req, resp) => {
//         resp.statusCode = 200;
//         resp.setHeader('Content-type', 'text/html');
//         resp.write(html);
//         resp.end();
//     }); 

//     server.listen(port, hostname, () => {
//         console.log('Server started on port ' + port);
// });
// })
