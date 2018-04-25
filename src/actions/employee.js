import { ADD_EMPLOYEE, UPDATE_LIST, SORT_BY_NAME } from '../types/employee';

export const updateList = members => (
  { type: UPDATE_LIST, members }
);

export const addEmployee = (employee, firstLetter) => (
  { 
    type: ADD_EMPLOYEE,
    firstLetter,
    ...employee
  }
);

export const sortByName = () => (
  { type: SORT_BY_NAME }
);