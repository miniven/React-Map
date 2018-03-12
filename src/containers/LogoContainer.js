import { connect } from 'react-redux';
import Logo from '../components/Logo/Logo';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    'setZoom': value => {
      dispatch({ type: 'SET_MAP_ZOOM', zoom: value });
    }
  };
};

const LogoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Logo);

export default LogoContainer;