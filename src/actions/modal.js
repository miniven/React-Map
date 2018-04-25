import { TOGGLE_MODAL_VISIBILITY, SET_MODAL_DATA } from '../types/modal';

export const toggleModalVisibility = () => (
  { type: TOGGLE_MODAL_VISIBILITY }
);

export const setModalData = data => (
  { type: SET_MODAL_DATA, data }
);