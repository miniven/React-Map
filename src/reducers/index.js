import { combineReducers } from 'redux'

import employeeList from './employeeList';
import sortedBy from './sortedBy';
import searchValue from './searchValue';
import officeMap from './officeMap';
import modal from './modal';

export default combineReducers({
	employeeList,
	sortedBy,
	searchValue,
	officeMap,
	modal
});