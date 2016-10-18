var React = require('react');
var EmployeeList = require('EmployeeList');
var EmployeeDetails = require('EmployeeDetails');

var Employee = React.createClass({
	render: function(){
		return(
			<div>
				<div style={{float:"left", marginLeft:"100px"}}>
					<h4>Employee List:</h4>
					<EmployeeList/>
				</div>
				
				<div style={{float:"left", marginLeft:"200px"}}>
					<h4>Employee Details:</h4>
					<div style={{border: "1px solid brown", padding:"5px"}}>
					  <EmployeeDetails />
					</div>
				</div>
			</div>			
		);
	}
});

module.exports = Employee;