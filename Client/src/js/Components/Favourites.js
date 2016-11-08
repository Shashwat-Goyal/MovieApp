var React=require('react');
var FavouriteDisplayBox=require('./FavouriteDisplayBox');
var FavouritesArray=[];
var CompleteArray=[];
var Favourites=React.createClass({
	getInitialState:function(){
		return ({movieObj:[]});
	},

	handleDeleteMovie:function(imdbID){
		var url="http://localhost:8085/movie/DeleteMovie";
		var deleteID={'imdbID':imdbID};
		alert('entered DeleteMovie');
		$.ajax({
			url:url,
			type:"DELETE",
			data:deleteID,
			success:function(data){
				console.log(data);
				var index=CompleteArray.findIndex(function(element){
					return (element.imdbID===deleteID.imdbID);
				});
				if(index!=-1){
					console.log("executing");
					CompleteArray.splice(index,1);
					this.setState({movieObj:CompleteArray});
					console.log(this.state.movieObj);
				}
				else{
					console.log("Not executing");
				}
			}.bind(this),
			error:function(){
				console.log(err);
			}.bind(this)
		});
	},

	handleUpdateMovie:function(Rating,Description,imdbID){
		var url="http://localhost:8085/movie/UpdateMovie";
		console.log(imdbID);
		var movieObject={};
		movieObject.imdbID=imdbID;
		movieObject.Rating=Rating;
		movieObject.Description=Description;
		alert(Rating+"   "+Description);
		$.ajax({
			url:url,
			type:"PUT",
			data:movieObject,
			success: function(data){
				console.log(data);
				var index=CompleteArray.findIndex(function(element){
					return (element.imdbID===movieObject.imdbID);
				});
				if(index!=-1){
					console.log("executing");
					CompleteArray[index].Rating=Rating;
					CompleteArray[index].Description=Description;
					this.setState({movieObj:CompleteArray});
					console.log(this.state.movieObj);
				}
				else{
					console.log("Not executing");
				}
			}.bind(this),
			error:function(err){
				console.log(err);
			}

		});
	},

	componentDidMount:function(){
		var url="http://localhost:8085/movie/GetMovies";
		var that=this;
		$.ajax({
			url:url,
			type:'GET',
			dataType:'JSON',
			async:true,
			success:function(data){
				console.log(data);
				CompleteArray=data;
				that.setState({movieObj:data});
			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		});
	},

	render:function(){
		FavouritesArray=this.state.movieObj.map(function(movie){
			return (<FavouriteDisplayBox newMovie={movie} onDelete={this.handleDeleteMovie} onUpdate={this.handleUpdateMovie}></FavouriteDisplayBox>);
		}.bind(this));
		return (
		<div style={{marginTop:'100'}}>
		{FavouritesArray}
		</div>
		);
	}
});

module.exports=Favourites;