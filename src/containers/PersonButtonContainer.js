import { connect } from 'react-redux';
import PersonButton from '../components/PersonButton/PersonButton';

const mapStateToProps = (state, ownProps) => {
	return {
		'officeMap': state.officeMap
	};
};

const mapDispatchToProps = dispatch => {
	return {
		'setZoom': value => {
			dispatch({ type: 'SET_MAP_ZOOM', zoom: value });
		},

		'setCoords': coords => {
			dispatch({ type: 'SET_MAP_COORDS', coords });
		}
	};
};

const PersonButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PersonButton);

export default PersonButtonContainer;