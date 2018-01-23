import { combineReducers } from 'redux'

const employeeList = (state = [], { type, name, post, division, sort }) => {
	switch(type) {
		case 'ADD_EMPLOYEE':
			return [
				...state,
				{
					name,
					post,
					division,
					pos: {
						x: 200,
						y: 250
					}
				}
			];
		case 'SORT_BY_NAME':
			return [
				...state.sort((current, next) => current.name > next.name ? 1 : -1)
			];
		case 'SORT_BY_DIVISION':
			return [
				...state.sort((current, next) => current.division > next.division ? 1 : -1)
			];
		default:
			return state;
	};
};

const sort = (state = 'NAME', { type, name }) => {
	switch(type) {
		case 'SET_SORT':
			return name;
		default:
			return state;
	};
};

const searchValue = (state = '', { type, value }) => {
	switch(type) {
		case 'SET_SEARCH_VALUE':
			return value;
		default:
			return state;
	};
};

export default combineReducers({
	employeeList,
	sort,
	searchValue
});