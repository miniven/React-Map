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
	};
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
			let key;

			switch(sorting) {
				case 'NAME':
					key = 'name';
					break;
				case 'DIVISION':
					key = 'division';
					break;
				case 'POST':
					key = 'post';
					break;
				default:
					key = 'name';
					break;
			};

			if (sorting === 'NAME') {
				return employeeList.reduce((result, current) => {
					return {
						...result,
						[current[key][0]]: result[current[key][0]] !== undefined ? [...result[current[key][0]], current.id] : [current.id]
					};
				}, {});
			};

			return employeeList.reduce((result, current) => {
				return {
					...result,
					[current[key]]: result[current[key]] !== undefined ? [...result[current[key]], current.id] : [current.id]
				};
			}, {});
		}
	};
};

const SidebarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);

export default SidebarContainer;