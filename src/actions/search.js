import { SET_SEARCH_VALUE } from '../types/search';

export const setSearchValue = value => (
  { type: SET_SEARCH_VALUE, value }
);