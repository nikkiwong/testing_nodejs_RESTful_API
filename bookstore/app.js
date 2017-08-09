var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genres')
Book = require('./models/books')

//connect to Mongoose
var promise = mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, resp){
    resp.send("Please use /api/books or /api");
});

app.get('/api/genres', function(req, resp){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        resp.json(genres);
    });
});

app.get('/api/books', function(req, resp){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        resp.json(books);
    });
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
