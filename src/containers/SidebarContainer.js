import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';

const filterByName = (list, name) => {
	return [
		...list.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) >= 0)
	];
};

const mapStateToProps = state => {
	return {
		'sortedBy': state.sortedBy,
		'searchValue': state.searchValue,
		'employeeList': filterByName(state.employeeList, state.searchValue),
		'departments': state.departments
	};
};

const mapDispatchToProps = dispatch => {
	return {
		'handleChange': event => {
			dispatch({ type: 'SET_SEARCH_VALUE', value: event.target.value });
		},
		'addPoint': (name) => {
			dispatch({ type: 'ADD_DEPARTMENT', name });
		},
		addEmployee: (name, employeeID) => {
			dispatch({ type: 'ADD_EMPLOYEE_TO_DEPARTMENT', name, employeeID });
		}
	};
};

const SidebarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);

export default SidebarContainer;