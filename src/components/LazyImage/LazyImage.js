import React, { Component } from 'react';

import './LazyImage.scss';

class LazyImage extends Component {
  state = {
    loaded: false
  }

  setLoaded = () => {
    console.log('loaded');
    this.setState({ loaded: true });
  }

  componentWillReceiveProps() {
    !this.props.isVisible && this.setState({ loaded: false });
  }

  render() {
    return (
      <div className="lazy-image">
        <div className={`lazy-image__loader ${this.state.loaded ? 'lazy-image__loader--hidden' : ''}`}>
          <div className="lazy-image__box"></div>
        </div>
        <img
          className={`${this.props.className} lazy-image__img ${this.state.loaded ? 'lazy-image__img--loaded' : ''}`}
          src={this.props.src}
          alt={this.props.name}
          onLoad={this.setLoaded}
        />
      </div>
    );
  }
}

export default LazyImage;