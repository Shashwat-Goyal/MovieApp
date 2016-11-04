var React=require('react');

var SearchComponent=React.createClass({

	onFormSubmit:function(e){
		e.preventDefault();
		var movieNameRef=this.refs.MovieName;
		var movieName=movieNameRef.value;
		movieNameRef.value='';
		this.props.onSearch(movieName);
	},

	render:function(){

		var myStyle={
			textAlign:'center',
			paddingTop:80+'px',
			marginBottom: 40+'px'
		};

		return (
			<div style={myStyle} className="container">

				<form className="form-horizontal" onSubmit={this.onFormSubmit}>
							<div className="form-group">
								<label className="col-lg-2 control-label" for="inputMovieName">Enter Movie Name: </label>
								<div className="col-lg-8">
									<input className="form-control" id="inputName" placeholder="Movie Name" type="text" ref="MovieName"></input>
								</div>
							</div> 

							<div className="form-group">
								<label className="col-lg-2 control-label"></label>
								<div className="col-lg-8">
									<button className="btn btn-success btn-block"> Search <span className="glyphicon glyphicon-search"></span></button>
								</div>
							</div> 
						</form>
						<br></br>
				<hr></hr>
			</div>
			);
	}
});
module.exports=SearchComponent;