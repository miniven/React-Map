import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';

const filterByName = (list, name) => {
	return [
		...list.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) >= 0)
	];
};

const mapStateToProps = state => {
	return {
		'searchValue': state.searchValue,
		'employeeList': filterByName(state.employeeList, state.searchValue)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		'handleChange': event => {
			dispatch({ type: 'SET_SEARCH_VALUE', value: event.target.value });
		}
	};
};

const SidebarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);

export default SidebarContainer;