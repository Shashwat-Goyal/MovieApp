var React=require('react');
var ReactDOM=require('react-dom');
var SearchComponent=require('./Components/SearchComponent');
var DisplayComponent=require('./Components/DisplayComponent');
var NavComponent=require('./Components/NavComponent');
//var arr={};
var MainComponent=React.createClass({
	handleAjaxCall:function(movieName){
		//var that=this;
		
		var url="https://omdbapi.com/?s="+movieName;
		
		$.ajax({
			url:url,
			type:'GET',
			dataType:'JSON',
			success: function(data){
				this.setState({movies:data.Search});
			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)

		});
		/*$.getJSON(url, function(jsonData){
			console.log(jsonData.Search);
			alert("entering");
			//arr=jsonData;
			/*
			for(var keys in jsonData){
				arr.push(jsonData[keys]);
			}
			console.log(arr.length);
			that.setState({movies:jsonData.Search});
		});*/
		
	},

	getInitialState:function(){
		return({
			movies:[]
			});
	},

	render: function(){
		return (
			<div>
				<NavComponent />
				<SearchComponent onSearch={this.handleAjaxCall} />
				<DisplayComponent movieObj={this.state.movies}></DisplayComponent>
			</div>
			);
	}
});

ReactDOM.render(<MainComponent />, 
	document.getElementById('app')); //puts the virtual dom & injects into the main physical DOM. 