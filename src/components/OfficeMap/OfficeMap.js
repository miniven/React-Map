import React, { Component } from 'react';
import { Map, ImageOverlay, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './OfficeMap.scss';

export default class OfficeMap extends Component {
  state = {
    lat: 0,
    lng: 0,
    zoom: 20,
  }

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      <Map 
        center={position} 
        zoom={this.state.zoom} 
        bounds={[[0, 0], [1000, 1000]]}
      >
        <ImageOverlay 
          url='/images/scheme.svg'
          bounds={[[0, 0], [1000, 1000]]}
        />
        {/*
                <TileLayer
                  attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />*/}
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