import { connect } from 'react-redux';
import Logo from '../components/Logo/Logo';

import { setMapZoom } from '../actions/officeMap';

const mapDispatchToProps = dispatch => {
  return {
    'setZoom': value => {
      dispatch(setMapZoom(value));
    }
  };
};

const LogoContainer = connect(
  null,
  mapDispatchToProps
)(Logo);

export default LogoContainer;