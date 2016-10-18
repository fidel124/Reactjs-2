var React = require('react');
var {connect} = require('react-redux');

var EmployeeDetails = React.createClass({	
	render:function(){
		if(!this.props.user){
			return(<h6>Select an employee ...</h6>);
		}
		return(
			<div>
				<img src={this.props.user.thumbnail} alt={this.props.user.first} />
				<h3>{this.props.user.first} {this.props.user.last}</h3>
				<h6>Age: {this.props.user.age}</h6>
				<h6>Description: {this.props.user.description}</h6>
			</div>			
		);
	}
});

function mapStateToProps(state){
	return{
		user: state.activeUser   //////
	};
}

module.exports = 
	connect(mapStateToProps)(EmployeeDetails);

/*
module.exports = connect(
	(state) =>{				
		return{
			users: state.users
		}
	}, matchDispatchToProps
)(EmployeeList);  */

