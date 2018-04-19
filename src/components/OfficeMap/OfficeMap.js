import React, { Component } from 'react';
import { Map, ImageOverlay } from 'react-leaflet';
import DivIcon from 'react-leaflet-div-icon';

import 'leaflet/dist/leaflet.css';
import './OfficeMap.scss';

export default class OfficeMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markersHidden: true
    };

    this.setCurrentZoom = this.setCurrentZoom.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.hideMarkers = this.hideMarkers.bind(this);
    this.focusOnMarker = this.focusOnMarker.bind(this);
    this.showMarkers = this.showMarkers.bind(this);
  }

  setCurrentZoom(event) {
    this.props.setZoom(event.target.getZoom());
  }

  handleMarkerClick(zoom, coords, data) {
    this.focusOnMarker(zoom, coords);
    this.props.setModalData(data);
    this.props.toggleModal();
  }

  focusOnMarker(zoom, coords) {
    this.props.setZoom(zoom);
    this.props.setCoords(coords);
  }

  hideMarkers(event) {
    event.target.getZoom() === 6 ? this.toggleMarkers() : null;
  }

  showMarkers(event) {
    event.target.getZoom() === 6 ? this.toggleMarkers() : null;
  }

  toggleMarkers() {
    this.setState({
      markersHidden: !this.state.markersHidden
    });
  }

  renderMarker(data, hidden) {
    const position = this.props.markers[data.pos];
    const imageClassName = `leaflet__marker-image ${hidden ? 'leaflet__marker-image--hidden' : ''}`;
    const buttonClassName = `leaflet__marker-button ${hidden ? 'leaflet__marker-button--hidden' : ''}`;

    return (
        <DivIcon 
          key={data.name}
          className='leaflet__marker'
          iconSize='auto'
          position={position}
        >
          <div 
            className='leaflet__marker-inner'
            style={{
              transform: `perspective(1px) translateZ(0) translate(-50%, -50%) scale(${this.props.officeMap.zoom * (this.props.officeMap.zoom / 3.6) * 0.1})`
            }}
          >
            <img 
              className={imageClassName} 
              src={data.img} 
              alt={data.name}
            />
            <div 
              className='leaflet__marker-content'
            >
              <p 
                className='leaflet__marker-text leaflet__marker-text--name'
                onClick={() => this.focusOnMarker(6, position)}
              >{data.name}</p>
              <p className='leaflet__marker-text leaflet__marker-text--post'>{data.postShort || data.post}</p>
              <button
                className={buttonClassName}
                onClick={() => this.handleMarkerClick(6, position, data)}
              >Подробнее</button>
            </div>
          </div>
        </DivIcon>
    );
  }

  componentDidMount() {
    this.props.setZoom(3);
    this.props.setCoords([70, 125]);
  }

  render() {
    return (
      <Map 
        ref={map => this.map = map}
        center={this.props.officeMap.coords} 
        zoom={this.props.officeMap.zoom}
        maxBounds={this.props.officeMap.mapMaxBounds}
        maxBoundsViscosity={1.5}
        maxZoom={6}
        minZoom={3}
        onZoom={this.setCurrentZoom}
        onZoomstart={this.hideMarkers}
        onZoomend={this.showMarkers}
        zoomAnimation={!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)}
      >
        <ImageOverlay 
          url={this.props.officeMap.imageSrc}
          bounds={this.props.officeMap.imageBounds}
        />

        {this.props.employeeList.map(data => this.renderMarker(data, this.state.markersHidden))}
      </Map>
    )
  }
}