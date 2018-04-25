import { connect } from 'react-redux';
import SortButton from '../components/SortButton/SortButton';

import { setSort } from '../actions/sort';

const mapStateToProps = (state, ownProps) => {
	return {
		'sortedBy': state.sortedBy
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		'setSortBy': name => {
			dispatch(setSort(name));
		}
	};
};

const SortButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SortButton);

export default SortButtonContainer;