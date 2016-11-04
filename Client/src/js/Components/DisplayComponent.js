var React=require('react');
var MovieDisplayBox=require('./MovieDisplayBox');
var DisplayComponent=React.createClass({
	
	render:function(){
		var movieObjectArr=this.props.movieObj.map(function(movie){

			//console.log(movie.Title+"  "+movie.Year+" "+movie.Poster);
			return (<MovieDisplayBox movieObject={movie} year={movie.Year} imdbID={movie.imdbID} title={movie.Title} 
			poster={movie.Poster} ></MovieDisplayBox>);
		});
		
		return(
			<div>
				 {movieObjectArr}
			</div>
			);
	}
});

module.exports=DisplayComponent;