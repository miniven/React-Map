import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './OfficeMap.scss';

export default class OfficeMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      <Map center={position} zoom={this.state.zoom} imageOverlay='http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}