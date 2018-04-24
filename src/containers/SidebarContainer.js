import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';

const filterByProp = (list, value) => {
	return [
		...list.filter(item => {
			return item['name'].toLowerCase().indexOf(value.toLowerCase()) >= 0 || 
				item['post'].toLowerCase().indexOf(value.toLowerCase()) >= 0
		})
	];
};

const mapStateToProps = (state, ownProps) => {
	return {
		'toggleSidebar': ownProps.toggleSidebar,
		'sortedBy': state.sortedBy,
		'searchValue': state.searchValue,
		'employeeList': filterByProp(state.employeeList, state.searchValue)
	};
};

const getSortedGroups = (list, key) => {
	return list.reduce((result, current) => {
		return {
			...result,
			[current[key]]: result[current[key]] !== undefined ? [...result[current[key]], current.id] : [current.id]
		};
	}, {});
};

const mapDispatchToProps = dispatch => {
	return {
		handleChange(event) {
			dispatch({ type: 'SET_SEARCH_VALUE', value: event.target.value });
		},
		addPoint(name) {
			dispatch({ type: 'ADD_DEPARTMENT', name });
		},
		getGroups(employeeList, sorting) {
			switch(sorting) {
				case 'NAME':
					return getSortedGroups(employeeList, 'firstLetter');
				case 'DIVISION':
					return getSortedGroups(employeeList, 'division');
				case 'POST':
					return getSortedGroups(employeeList, 'post');
				default:
					return getSortedGroups(employeeList, 'firstLetter');
			};
		},
		fetchList(members) {
			dispatch({ type: 'FETCH_LIST' });
		}
	};
};

const SidebarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);

export default SidebarContainer;