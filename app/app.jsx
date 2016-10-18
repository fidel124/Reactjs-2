var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var {Provider} = require('react-redux');
var {createStore} = require('redux');
var allReducers = require('./reducers');

var Main = require('Main');
var About = require('About');
var Employee = require('Employee');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>			
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="about" component={About}/>						
				<IndexRoute component={Employee}/>
			</Route>
		</Router>				
	</Provider>,
	document.getElementById('app')
);

