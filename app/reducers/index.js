var {combineReducers} = require('redux');
var UserReducer = require('./reducer-users');
var selectedUser = require('./active-reducer');

var allReducers = combineReducers({
	users: UserReducer,
	activeUser: selectedUser
});

module.exports = allReducers;
