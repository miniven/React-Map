import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';

const mapStateToProps = state => {
	return {
		'searchValue': state.searchValue,
		'employeeList': state.employeeList,
		'sortedBy': state.sortedBy
	};
};

const mapDispatchToProps = dispatch => {
	return {
		'handleChange': event => {
			dispatch({ type: 'SET_SEARCH_VALUE', value: event.target.value });
		},
		'setSortBy': name => {
			dispatch({ type: 'SET_SORT', name });

			switch(name) {
				case 'NAME':
					dispatch({ type: 'SORT_BY_NAME' });
					break;
				case 'DIVISION':
					dispatch({ type: 'SORT_BY_DIVISION' });
					break;
				default:
					break;
			};
		}
	};
};

const SidebarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);

export default SidebarContainer;