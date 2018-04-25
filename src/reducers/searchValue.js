import { SET_SEARCH_VALUE } from '../types/search';

const searchValue = (state = '', { type, value }) => {
	switch(type) {
		case SET_SEARCH_VALUE:
			return value;
		default:
			return state;
	};
};

export default searchValue;