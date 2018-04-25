import axios from 'axios';
import { connect } from 'react-redux';
import { API_TOKEN } from '../constants';
import Sidebar from '../components/Sidebar/Sidebar';

import { updateList } from '../actions/employee';
import { setSearchValue } from '../actions/search';

import { NAME, DIVISION, POST } from '../types/sort';

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
			dispatch(setSearchValue(event.target.value));
		},
		getGroups(employeeList, sorting) {
			switch(sorting) {
				case NAME:
					return getSortedGroups(employeeList, 'firstLetter');
				case DIVISION:
					return getSortedGroups(employeeList, 'division');
				case POST:
					return getSortedGroups(employeeList, 'post');
				default:
					return getSortedGroups(employeeList, 'firstLetter');
			};
		},
		fetchList(members) {
			dispatch(dispatch => {
		    axios.get(`https://slack.com/api/users.list?token=${API_TOKEN}`)
		      .then(response => response.data.members)
		      .then(members => {
		        dispatch(updateList(members));
		      })
		      .catch(err => console.error(err));
			});
		}
	};
};

const SidebarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);

export default SidebarContainer;