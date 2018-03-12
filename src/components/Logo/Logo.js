import React from 'react';
import SVGInline from 'react-svg-inline';

import LogoImage from './lp-base-cmyk.svg';
import './Logo.scss';

const Logo = (props) => {
  return (
    <button
      className='logo'
      onClick={() => props.setZoom(3)}
    >
      <SVGInline 
        svg={LogoImage}
        className="logo__svg"
      />
    </button>
  );
};

export default Logo;