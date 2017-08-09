var mongoose = require('mongoose');

//genre schema, not need for the db but just for the application
var genreSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true //this is validation
    },
    create_date:{
        type: Date,
        default: Date.now //automatically inserted
    }
});
//creating a variable called Genre and set it to module.exports. 
//This makes it so that this genre object is accessible from anywhere else
var Genre = module.exports = mongoose.model('Genre', genreSchema)

//function here to get Genres
//module.exports means it is accessible from the outside
//callback is through the route file, limit is whatever that is passed from parameters
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit); //gets genre
}

//add genre
module.exports.getGenres = function(genre, callback){
    Genre.create(genre, callback); //genre = data from the form
}
