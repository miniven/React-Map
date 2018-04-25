import { TOGGLE_MODAL_VISIBILITY, SET_MODAL_DATA } from '../types/modal';

const modal = (
	state = { open: false, data: {} },
	{ type, data }
) => {
	switch(type) {
		case TOGGLE_MODAL_VISIBILITY:
			return {
				...state,
				open: !state.open
			};
		case SET_MODAL_DATA:
			return {
				...state,
				data
			};
		default:
			return state;
	};
};

export default modal;