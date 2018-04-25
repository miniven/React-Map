import { connect } from 'react-redux';
import OfficeMap from '../components/OfficeMap/OfficeMap';

import { setMapZoom, setMapCoords } from '../actions/officeMap';
import { toggleModalVisibility, setModalData } from '../actions/modal';

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
			dispatch(setMapZoom(value));
		},

		'setCoords': coords => {
			dispatch(setMapCoords(coords));
		},

		'toggleModal': () => {
			dispatch(toggleModalVisibility());
		},

		'setModalData': data => {
			dispatch(setModalData(data));
		}
	};
};

const OfficeMapContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(OfficeMap);

export default OfficeMapContainer;