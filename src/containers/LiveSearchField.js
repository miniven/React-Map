import { connect } from 'react-redux';
import SearchField from '../components/SearchField/SearchField';

const mapStateToProps = state => {
	return {
		'searchValue': state.searchValue
	};
};

const mapDispatchToProps = dispatch => {
	return {
		'handleChange': event => {
			dispatch({ type: 'SET_SEARCH_VALUE', value: event.target.value });
		}
	};
};

const LiveSearchField = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchField);