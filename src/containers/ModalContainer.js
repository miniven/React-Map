import { connect } from 'react-redux';
import Modal from '../components/Modal/Modal';

const mapStateToProps = (state, ownProps) => {
	return {
		'open': state.modal.open,
		'data': state.modal.data
	};
};

const mapDispatchToProps = dispatch => {
	return {
		'toggleModal': () => {
			dispatch({ type: 'TOGGLE_MODAL_VISIBILITY' });
		},
	};
};

const ModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal);

export default ModalContainer;