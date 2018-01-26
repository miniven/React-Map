import React, { Component } from 'react';
import { Map, ImageOverlay } from 'react-leaflet';
import DivIcon from 'react-leaflet-div-icon';

import 'leaflet/dist/leaflet.css';
import './OfficeMap.scss';

export default class OfficeMap extends Component {
  constructor(props) {
    super(props);

    // console.log(this.map.leafletElement.getBounds());

    this.setCurrentZoom = this.setCurrentZoom.bind(this);
    this.focusMarker = this.focusMarker.bind(this);
  }

  setCurrentZoom(event) {
    this.props.setZoom(event.target.getZoom());
  }

  focusMarker(zoom, coords) {
    this.props.setZoom(zoom);
    this.props.setCoords(coords);
  }

  renderMarker(data) {
    const position = [data.pos[1], data.pos[0]];

    return (
        <DivIcon 
          key={data.name}
          className='leaflet__marker'
          iconSize='auto'
          position={position}
          onClick={() => this.focusMarker(5, position)}
        >
          <div className='leaflet__marker-inner' style={{'transform': `scale(${this.props.officeMap.zoom / 5})`}}>
            <img className='leaflet__marker-image' src={data.img} alt={data.name} />
            <div 
              className={`leaflet__marker-content ${this.props.officeMap.zoom < 5 ? 'leaflet__marker-content--hidden' : ''}`}
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
        center={this.props.officeMap.coords} 
        zoom={this.props.officeMap.zoom}
        maxBounds={this.props.officeMap.mapMaxBounds}
        maxBoundsViscosity={1.5}
        maxZoom={5}
        minZoom={3}
        onZoom={this.setCurrentZoom}
      >
        <ImageOverlay 
          url={this.props.officeMap.imageSrc}
          bounds={this.props.officeMap.imageBounds}
        />

        {this.props.employeeList.map(data => this.renderMarker(data))}
      </Map>
    )
  }
}