export var selectUser = (user) =>{ //action creator
	
	return{ // its job is to return an action
		type: "USER_SELECTED",
		payload: user
	}
};