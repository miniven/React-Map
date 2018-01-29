import { connect } from 'react-redux';
import OfficeMap from '../components/OfficeMap/OfficeMap';

const mapStateToProps = (state, ownProps) => {
	return {
		'employeeList': state.employeeList,
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

const OfficeMapContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(OfficeMap);

export default OfficeMapContainer;