var React=require('react');
var ReactDOM=require('react-dom');
var {Router, Route, hashHistory, IndexRoute}=require('react-router');
var ParentComponent=require('./Components/ParentComponent');
var About=require('./Components/About');
var Contact=require('./Components/Contact');
var NavComponent=require('./Components/NavComponent');
var Favourites=require('./Components/Favourites');
//var arr={};

var MainComponent=React.createClass({
	render:function(){
		return(
			<div>
				<NavComponent />
				{this.props.children}
			</div>
			);
	}
});

ReactDOM.render(

	<Router history={hashHistory}>
	<Route path="/" component={MainComponent} >
	<Route path="getFavourites" component={Favourites}></Route>
	<Route path="about" component={About} ></Route>
	<Route path="contactUs" component={Contact}></Route>
	<IndexRoute component={ParentComponent}></IndexRoute>
	</Route>
	</Router>, 
	document.getElementById('app')); //puts the virtual dom & injects into the main physical DOM. 