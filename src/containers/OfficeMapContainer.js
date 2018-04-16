import { connect } from 'react-redux';
import OfficeMap from '../components/OfficeMap/OfficeMap';

const mapStateToProps = (state, ownProps) => {
	return {
		'employeeList': state.employeeList,
		'markers': state.markers,
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
		},

		'toggleModal': () => {
			dispatch({ type: 'TOGGLE_MODAL_VISIBILITY' });
		},

		'setModalData': data => {
			dispatch({ type: 'SET_MODAL_DATA', data });
		}
	};
};

const OfficeMapContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(OfficeMap);

export default OfficeMapContainer;