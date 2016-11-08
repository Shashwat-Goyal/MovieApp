var React=require('react');

var MovieDisplayBox=React.createClass({
	
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
				alert(data);
			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		});
	},

	render: function(){
		
		var url="http://www.imdb.com/title/"+this.props.imdbID;
		//console.log(this.props.poster+"  "+this.props.year+"  "+this.props.title+"  "+this.props.imdbID);
		return (
			<div className="container">
			<div className="row">
			<div className="col-offset-1 col-lg-4">
			<img src={this.props.poster} alt="Poster Image" height="300" width="300" style={{marginTop:'20'}}></img>
			</div>
			<div className="col-lg-6">
			<h1>{this.props.title}</h1>
			<p className="lead"><span style={{textDecoration:'underline'}}> IMDB ID </span>: {this.props.imdbID}</p>
			<p className="lead"> Year of Release: {this.props.year}</p>
			<a href={url} className="btn btn-primary" role="button" target="_blank">View on IMDb <span className="glyphicon glyphicon-share-alt"></span></a><span>&nbsp;&emsp;</span>
			<button onClick={this.addMovie} className="btn btn-warning">Add as Favourite <span className="glyphicon glyphicon-star"></span></button>
			<br></br>
			</div>
			</div>
			<hr></hr>
			</div>
			);
		}
	});

	module.exports=MovieDisplayBox;