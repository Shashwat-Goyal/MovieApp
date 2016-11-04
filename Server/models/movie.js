var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var AddMoviesSchema = new Schema({
	imdbID:String,
	Title:String,
	Year:String,
	Poster:String
});

//addMovies = mongoose.model('AddMovies', AddMoviesSchema );

module.exports = /*addMovies;*/mongoose.model('AddMovies', AddMoviesSchema);