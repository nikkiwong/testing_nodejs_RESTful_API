var mongoose = require('mongoose');

//book schema, not need for the db but just for the application
var bookSchema = mongoose.Schema({
    title:{
        type: String, 
        required: true //this is validation
    },
    genre:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
    },
    author:{
        type: String, 
        required: true
    },
    publisher:{
        type: String, 
        required: true
    },
    pages:{
        type: String
    },
    image_url:{
        type: String
    },
    buy_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now //automatically inserted
    }
});
//creating a variable called Genre and set it to module.exports. 
//This makes it so that this genre object is accessible from anywhere else
var Book = module.exports = mongoose.model('Book', bookSchema)

//function here to get Genres
//module.exports means it is accessible from the outside
//callback is through the route file, limit is whatever that is passed from parameters
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit); //gets genre
}