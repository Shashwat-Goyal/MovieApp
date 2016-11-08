var React=require('react');
var SearchComponent=require('./SearchComponent');
var DisplayComponent=require('./DisplayComponent');


var ParentComponent=React.createClass({
	handleAjaxCall:function(movieName){
		//var that=this;
		
		var url="https://omdbapi.com/?s="+movieName;
		
		$.ajax({
			url:url,
			type:'GET',
			dataType:'JSON',
			success: function(data){
				if(data.Response==='False'){
					alert(data.Error);
				}
				else{
					this.setState({movies:data.Search});
				}
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
			
			<SearchComponent onSearch={this.handleAjaxCall} />
			<DisplayComponent movieObj={this.state.movies}></DisplayComponent>
			
			</div>
			);
		}
	});

	module.exports=ParentComponent;