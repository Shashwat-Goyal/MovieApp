var express = require('express');
var router = express.Router();
var movie=require("../models/movie");
var DBConnection=require('../Connection/DBConnection');
DBConnection();
/* Adding the movies in the database */
router.route('/AddMovie').post(function(req, res, next) {
	if(req.body){
		var movieVar = new movie(req.body);
		console.log(req.body);
		console.log(movieVar);
		movieVar.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				console.log("Movie added");
				res.send("Movie Added");
			}
		});
	}

});

//Getting data from the database using collection (Important)
router.route('/GetMovies').get(function(req,res){
	var result=[];
	var cursor=db.collection('addmovies').find({},{__v:false, _id:false});
	cursor.forEach(function(data,err){
		if(err){
			console.log(err);
		}
		result.push(data);
		console.log(result);

	},
	function(){
		res.json(result);
	});
});

/*
Getting data from the database using the schema

router.route('/GetMovies').get(function(req,res){
	addMovies.find({},function(err,docs){
		if(err){
			res.send(err);
		}
		else{
			res.json({addMovies:docs});
		}
	});
});
*/

//Updating the given movie
router.route('/UpdateMovie').put(function(req,res){
	if(req.body){
		console.log(req.body);
		db.collection('addmovies').update({'ID':req.body.ID},req.body)
		res.send("Updated");
	}
	else{
		console.log("Nothing in body");
		res.send("Please give a movie object");
	}
});

//Deleting a given movie
router.route('/DeleteMovie').delete(function(req,res){
	if(req.body){
		console.log(req.body);
		db.collection('addmovies').remove({'ID':req.body.ID});
		res.send("Deleted the given movie");
	}
	else{
		console.log("Nothing ing body");
		res.send("Please enter a movie object");
	}
});
module.exports = router;
