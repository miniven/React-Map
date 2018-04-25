import { connect } from 'react-redux';
import Modal from '../components/Modal/Modal';

import { toggleModalVisibility } from '../actions/modal';

const mapStateToProps = (state, ownProps) => {
	return {
		'open': state.modal.open,
		'data': state.modal.data,
		'chief': state.employeeList.find(employee => employee.id === state.modal.data.chiefID)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		'toggleModal': () => {
			dispatch(toggleModalVisibility());
		},
	};
};

const ModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal);

export default ModalContainer;