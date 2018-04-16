import { combineReducers } from 'redux'

import employeeList from './employeeList';
import markers from './markers';
import sortedBy from './sortedBy';
import searchValue from './searchValue';
import officeMap from './officeMap';
import modal from './modal';

export default combineReducers({
	employeeList,
  markers,
	sortedBy,
	searchValue,
	officeMap,
	modal
});