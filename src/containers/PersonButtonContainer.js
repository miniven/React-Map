import { connect } from 'react-redux';
import PersonButton from '../components/PersonButton/PersonButton';

import { setMapZoom, setMapCoords } from '../actions/officeMap';

const mapStateToProps = (state, ownProps) => {
	return {
		'officeMap': state.officeMap,
		'markers': state.markers,
		'filter': state.filter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		'setZoom': value => {
			dispatch(setMapZoom(value));
		},

		'setCoords': coords => {
			dispatch(setMapCoords(coords));
		}
	};
};

const PersonButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PersonButton);

export default PersonButtonContainer;