import { SET_SORT } from '../types/sort';

const sortedBy = (state = 'NAME', { type, name }) => {
	switch(type) {
		case SET_SORT:
			return name;
		default:
			return state;
	};
};

export default sortedBy;