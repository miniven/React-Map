import { SET_MAP_ZOOM, SET_MAP_COORDS } from '../types/officeMap';

export const setMapZoom = zoom => (
  { type: SET_MAP_ZOOM, zoom }
);

export const setMapCoords = coords => (
  { type: SET_MAP_COORDS, coords }
);