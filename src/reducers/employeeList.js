const employeeList = (state = [], { type, name, post, division, sort, posX, posY }) => {
	switch(type) {
		case 'ADD_EMPLOYEE':
			return [
				...state,
				{
					img: 'https://www.talaka.org/assets/img/userpic-fallback.svg',
					name,
					post,
					division,
					pos: {
						x: posX,
						y: posY
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

export default employeeList;