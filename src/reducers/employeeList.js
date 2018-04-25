const employeeList = (state = [], {
	type,
	firstLetter, 
	id,
	email,
	name,
	postShort,
	post,
	division,
	sort,
	chiefID,
	pos,
	members
}) => {
	switch(type) {
		case 'ADD_EMPLOYEE':
			return [
				...state,
				{
					img: 'https://www.talaka.org/assets/img/userpic-fallback.svg',
					firstLetter,
					id,
					email,
					name,
					postShort,
					post,
					division,
					chiefID,
					pos
				}
			];
		case 'UPDATE_LIST':
			return [
				...state.filter(employee => !employee.email),
				...state
					.filter(employee => employee.email)
					.map(employee => {
						const member = members.find(member => member.profile.email === employee.email);

						if (member) {
							return {
								...employee,
								profile: member.profile
							};
						}

						return {
							...employee
						};
					})
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