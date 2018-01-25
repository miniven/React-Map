import { connect } from 'react-redux';
import OfficeMap from '../components/OfficeMap/OfficeMap';

const mapStateToProps = (state, ownProps) => {
	return {
		'employeeList': state.employeeList
	};
};

const OfficeMapContainer = connect(
	mapStateToProps
)(OfficeMap);

export default OfficeMapContainer;