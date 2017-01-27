
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');




//Load foundations
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

		ReactDOM.render(
		<p>Final Boilerplate project</p>,

		document.getElementById('app')
		);

		// require('./redux-example.jsx');
				require('./redux-todo-example.jsx');
