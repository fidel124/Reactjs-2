var React = require('react');

var About = React.createClass({
	render: function(){
		return(
			<div>
				<h1 className="text-center">About </h1>
				<p>
					This is a Reactjs application I made to showcase the us of some
					vital React-redux implementation that trigger an action that is 
					listened by a reducer. Redux is a big Javascript object that
					hold states for a React project.
				</p>
				<p>
					The action triggers and any reducer that corresponds with it
					is excuted.
				</p>								
			</div>
		);
	}
});

module.exports = About;