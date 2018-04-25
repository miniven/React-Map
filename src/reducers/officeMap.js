import { SET_MAP_ZOOM, SET_MAP_COORDS } from '../types/officeMap';

const officeMap = (
	state = {
		'mapMaxBounds': [[5, 0], [500, 250]],
		'imageBounds': [[0, 0], [1000, 250]],
		'imageSrc': '/images/scheme.svg'
	}, 
	{ type, zoom, coords = [0, 0] }
) => {
	switch(type) {
		case SET_MAP_ZOOM:
			return {
				...state,
				zoom
			};
		case SET_MAP_COORDS:
			return {
				...state,
				coords
			};
		default:
			return state;
	};
};

export default officeMap;