import { SET_MARKERS } from '../types/markers';

export const setMarkers = data => (
  {
    type: SET_MARKERS,
    data
  }
);