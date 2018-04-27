import React, { Component } from 'react';

import './LazyImage.scss';

class LazyImage extends Component {
  state = {
    loaded: false
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  componentWillReceiveProps() {
    !this.props.isVisible && this.setState({ loaded: false });
  }

  render() {
    const { loaded } = this.state;
    const { src, name, className } = this.props;

    return (
      <div className="lazy-image">
        <div className={`lazy-image__loader ${loaded ? 'lazy-image__loader--hidden' : ''}`}>
          <div className="lazy-image__box"></div>
        </div>
        <img
          className={`${className} lazy-image__img ${loaded ? 'lazy-image__img--loaded' : ''}`}
          src={src}
          alt={name}
          onLoad={this.setLoaded}
        />
      </div>
    );
  }
}

export default LazyImage;