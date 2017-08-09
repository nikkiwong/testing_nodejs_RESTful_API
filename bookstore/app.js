var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json()); //a one liner to initialize the body-parser


Genre = require('./models/genre');
Book = require('./models/book');

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

app.post('/api/genres', function(req, resp){ //doesn't matter if you have diferent urls as long as the request is different
    var genre = req.body; //where body-parser comes in... lets us access everything that comes in from the form. putting it into a genre object
    Genre.addGenres(genre, function(err, genre){
        if(err){
            throw err;
        }
        resp.json(genre); //in order to test this we neeed to make post request
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

app.get('/api/books/:_id', function(req, resp){
    Book.getBookById(req.params._id, function(err, book){ //getting id that comes from uri therefore need to use request
        if(err){
            throw err;
        }
        resp.json(book);
    });
});


app.post('/api/books', function(req, resp){ //doesn't matter if you have diferent urls as long as the request is different
    var book = req.body; //where body-parser comes in... lets us access everything that comes in from the form. putting it into a genre object
    Book.addBook(book, function(err, book){
        if(err){
            throw err;
        }
        resp.json(book); //in order to test this we neeed to make post request
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
