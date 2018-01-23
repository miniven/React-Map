import { connect } from 'react-redux';
import SortButton from '../components/SortButton/SortButton';

const mapStateToProps = (state, ownProps) => {
	return {
		'sortedBy': state.sortedBy
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
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

const SortButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SortButton);

export default SortButtonContainer;