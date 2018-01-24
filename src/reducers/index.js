import { combineReducers } from 'redux'

import employeeList from './employeeList';
import sortedBy from './sortedBy';
import searchValue from './searchValue';

export default combineReducers({
	employeeList,
	sortedBy,
	searchValue
});