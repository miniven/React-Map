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
      'zoom': 3
    }

    this.setCurrentZoom = this.setCurrentZoom.bind(this);
  }

  setCurrentZoom(event) {
    const value = event.target.getZoom();

    this.setState({
      'zoom': value
    });
  }

  renderMarker(data) {
    return (
        <DivIcon 
          key={data.name}
          className='leaflet__marker'
          iconSize='auto'
          position={[data.pos.x, data.pos.y]}
          onClick={() => alert('hello')}
        >
          <div className='leaflet__marker-inner'>
            <img className='leaflet__marker-image' src={data.img} alt={data.name} />
            <p className='leaflet__marker-text leaflet__marker-text--name'>{data.name}</p>
            <p className='leaflet__marker-text leaflet__marker-text--post'>{data.post}</p>
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
        maxBounds={[[5, 0], [500, 250]]}
        maxBoundsViscosity={1.5}
        maxZoom={5}
        minZoom={3}
        onZoom={this.setCurrentZoom}
      >
        <ImageOverlay 
          url='/images/scheme.svg'
          bounds={[[0, 0], [1000, 250]]}
        />

        {this.state.zoom >= 5 ? this.props.employeeList.map(data => this.renderMarker(data)) : null}
      </Map>
    )
  }
}