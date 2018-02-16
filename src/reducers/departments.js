const departments = (state = {}, { type, name, employeeIDs = [] }) => {
	switch(type) {
		case 'ADD_DEPARTMENT':
			return {
				...state,
				[name]: employeeIDs
			}
		default:
			return state;
	};
};

export default departments;