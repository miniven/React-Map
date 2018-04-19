import { connect } from 'react-redux';
import Logo from '../components/Logo/Logo';

const mapDispatchToProps = dispatch => {
  return {
    'setZoom': value => {
      dispatch({ type: 'SET_MAP_ZOOM', zoom: value });
    }
  };
};

const LogoContainer = connect(
  null,
  mapDispatchToProps
)(Logo);

export default LogoContainer;