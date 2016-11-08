var React=require('react');
var Modal=require('./Modal');

var FavouriteDisplayBox=React.createClass({
	getInitialState:function(){
		return ({flag:false, id:"#"+this.props.newMovie.imdbID});
	},
	/*
	addMovie: function(e){
		e.preventDefault();
		var url="http://localhost:8085/movie/AddMovie";
		var AddObject={};
		AddObject.imdbID=this.props.imdbID;
		AddObject.Title=this.props.title;
		AddObject.Year=this.props.year;
		AddObject.Poster=this.props.poster;
		console.log(AddObject);
		

		$.ajax({
			url:url,
			type:'POST',
			data:AddObject,
			success:function(data){
				console.log(data);
			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		});
	},*/
	setFlag:function(e){
		e.preventDefault();
		alert("entering setFlag");
		var i="#"+this.props.newMovie.imdbID;
		console.log(i);
		this.setState({flag:true, id:i});

	},

	handleClose:function(){
		alert("entering handleClose");
		this.setState({flag:false});
	},
	handleUpdate:function(Rating,Description,imdbID){
		this.props.onUpdate(Rating,Description,imdbID);
	},

	DeleteMov:function(e){
		e.preventDefault();
		alert(this.props.newMovie.imdbID);
		alert(this.props.onDelete);
		var imdbID=this.props.newMovie.imdbID;
		this.props.onDelete(imdbID);
	},

	render: function(){
		return (
			
			<div className="container">
			<div className="row">
			<div className="col-offset-1 col-lg-4">
			<img src={this.props.newMovie.Poster} alt="Poster Image" height="300" width="300" style={{marginTop:'20'}}></img>
			</div>
			<div className="col-lg-6">
			<h1>{this.props.newMovie.Title}</h1>
			<p className="lead"><span style={{textDecoration:'underline'}}> IMDB ID </span>: {this.props.newMovie.imdbID}</p>
			<p className="lead"> Year of Release: {this.props.newMovie.Year}</p>
			<p className="lead"> Description: {this.props.newMovie.Description}</p>
			<p className="lead"> Rating: {this.props.newMovie.Rating}</p>
			<button className="btn btn-warning" role="button" data-toggle="modal" data-target={this.state.id} > Update Movie Details <span className="glyphicon glyphicon-retweet"></span></button>&nbsp;&emsp;
			<button className="btn btn-danger" onClick={this.DeleteMov} > Delete <span className="glyphicon glyphicon-trash"></span></button>
			<br></br>
			</div>
			</div>
			<hr></hr>
			<Modal movieID={this.props.newMovie.imdbID} Flag={this.state.flag} onCloseModal={this.handleClose} onupdate={this.handleUpdate} />
			</div>
			);
	}
	});

	module.exports=FavouriteDisplayBox;