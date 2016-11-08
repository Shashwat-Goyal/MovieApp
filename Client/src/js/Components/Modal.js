var React=require('react');

var Modal=React.createClass({
	
	updateMovie:function(e){
		e.preventDefault();
		var Rating=this.refs.Rating.value;
		this.refs.Rating.value='';
		var Description=this.refs.Description.value;
		this.refs.Description.value='';
		this.props.onupdate(Rating,Description,this.props.movieID);
		
	},

	render:function(){
	return (
		<div>
			<div id={this.props.movieID} className="modal fade" tabIndex="-1" role="dialog">
			<div className="modal-dialog">
			<div className="modal-content">
			<div className="modal-header">
			<button className="close" data-dismiss="modal" onClick={this.props.onCloseModal}>&times;</button>

			<h4 className="modal-title"> Update </h4>
			

			<div className="modal-body">
			<form className="form-horizontal" >
			<div className="form-group">
			<label className="col-lg-2 control-label" for="imdbID"> imdbID </label>
			<div className="col-lg-10">
			<input className="form-control" id="imdbID" placeholder="Description" type="text" ref="imdbId" value={this.props.movieID} readOnly="readOnly"></input>
			</div>
			</div> 

			<div className="form-group">
			<label className="col-lg-2 control-label" for="Description"> Description </label>
			<div className="col-lg-10">
			<input className="form-control" id="Description" placeholder="Description" type="text" ref="Description"></input>
			</div>
			</div> 

			<div className="form-group">
			<label className="col-lg-2 control-label" for="Rating" > Rating </label>
			<div className="col-lg-10">
			<input className="form-control" id="Rating" placeholder="Rating" type="text" ref="Rating"></input>
			<br></br>
			<button className="btn btn-success btn-block" type="submit" data-dismiss="modal" onClick={this.updateMovie}> Update </button>
			</div>
			</div> 
			</form>	
			</div> 
			</div> 
			</div>
			</div>
			</div>
			{/*<div className="modal fade" id="UpdateModal">
			<div className="modal-dialog">
			<div className="modal-content">
			<div className="modal-header">
			<button className="close" data-dismiss="modal" onClick={this.props.onCloseModal}>&times;</button>

			<h4 className="modal-title"> Update </h4>
			</div>
			<div className="modal-body">
			<form className="form-horizontal">
			<div className="form-group">
			<label className="col-lg-2 control-label" for="imdbID"> imdbID </label>
			<div className="col-lg-10">
			<input className="form-control" id="imdbID" placeholder="Description" type="text" ref="imdbId" value={this.props.movieID} readOnly="readOnly"></input>
			</div>
			</div> 
			</form>	
			</div>  
			</div>
			</div>
			</div>
			</div>*/}
			</div>

		);

	}
});

module.exports=Modal;