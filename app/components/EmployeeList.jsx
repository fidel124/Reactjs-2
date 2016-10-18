var React = require('react');
var {bindActionCreators} = require('redux');
var {connect} = require('react-redux');
var {selectUser} = require('../actions/select');

var EmployeeList = React.createClass({

	createListItems(){
		return this.props.users.map((user) =>{
			return(
				<li key={user.id} onClick={()=> this.props.selectUser(user)}>
				   {user.first} {user.last}
				</li>
			);
		});
	}, 
	render:function(){
		return(
			<ul>
				{this.createListItems()}
			</ul>			
		);
	}
});

function mapStateToProps(state){
	return{
		users: state.users
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({selectUser: selectUser}, dispatch)
}

module.exports = 
	connect(mapStateToProps,matchDispatchToProps)(EmployeeList);

/*
module.exports = connect(
	(state) =>{				
		return{
			users: state.users
		}
	}, matchDispatchToProps
)(EmployeeList);  */

