import React, { Component } from 'react';
import { Map, ImageOverlay, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './OfficeMap.scss';

export default class OfficeMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0,
      zoom: 1,
    };
  }

  componentDidMount() {
    console.log(this.map.leafletElement.getBounds());
  }

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      <Map 
        ref={map => this.map = map}
        center={position} 
        zoom={this.state.zoom}
        maxZoom={5}
      >
        <ImageOverlay 
          url='/images/scheme.svg'
          bounds={[[0, 0], [1000, 1000]]}
        />
      </Map>
    )
  }
}