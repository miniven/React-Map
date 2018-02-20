const filter = ( state = 'name', { type, prop }) => {
	switch(type) {
		case 'SET_FILTER':
			return prop;
		default:
			return state;
	};
};

export default filter;