import React, { Component } from 'react';
import { Map, ImageOverlay } from 'react-leaflet';
import DivIcon from 'react-leaflet-div-icon';

import 'leaflet/dist/leaflet.css';
import './OfficeMap.scss';

export default class OfficeMap extends Component {
  constructor(props) {
    super(props);

    // console.log(this.map.leafletElement.getBounds());

    this.state = {
      'zoom': 3,
      'mapMaxBounds': [[5, 0], [500, 250]],
      'imageBounds': [[0, 0], [1000, 250]],
      'imageSrc': '/images/scheme.svg'
    }

    this.setCurrentZoom = this.setCurrentZoom.bind(this);
    this.getZoom = this.getZoom.bind(this);
  }

  setCurrentZoom(event) {
    const value = event.target.getZoom();

    this.setState({
      'zoom': value
    });
  }

  getZoom(event) {
    console.log(event.target.getZoom());
  }

  renderMarker(data) {
    return (
        <DivIcon 
          key={data.name}
          className='leaflet__marker'
          iconSize='auto'
          position={[data.pos[1], data.pos[0]]}
          onClick={event => console.log(event)}
        >
          <div className='leaflet__marker-inner' style={{'transform': `scale(${this.state.zoom / 5})`}}>
            <img className='leaflet__marker-image' src={data.img} alt={data.name} />
            <div 
              className={`leaflet__marker-content ${this.state.zoom < 5 ? 'leaflet__marker-content--hidden' : ''}`}
            >
              <p className='leaflet__marker-text leaflet__marker-text--name'>{data.name}</p>
              <p className='leaflet__marker-text leaflet__marker-text--post'>{data.post}</p>
            </div>
          </div>
        </DivIcon>
    );
  }

  render() {
    return (
      <Map 
        ref={map => this.map = map}
        center={[0, 0]} 
        zoom={3}
        maxBounds={this.state.mapMaxBounds}
        maxBoundsViscosity={1.5}
        maxZoom={5}
        minZoom={3}
        onZoom={this.setCurrentZoom}
        onZoomstart={this.getZoom}
      >
        <ImageOverlay 
          url={this.state.imageSrc}
          bounds={this.state.imageBounds}
        />

        {this.props.employeeList.map(data => this.renderMarker(data))}
      </Map>
    )
  }
}