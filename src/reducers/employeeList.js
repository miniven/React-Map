const employeeList = (state = [], { type, id, name, post, division, sort, pos }) => {
	switch(type) {
		case 'ADD_EMPLOYEE':
			return [
				...state,
				{
					img: 'https://www.talaka.org/assets/img/userpic-fallback.svg',
					id,
					name,
					post,
					division,
					pos
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

export default employeeList;