import React, { Component } from 'react';
import './PersonButton.scss';

export default class PersonButton extends Component {
	constructor(props) {
		super(props);

		this.focusMarker = this.focusMarker.bind(this);
	}

	getUnderline(string, sub) {
		const startIndex = string.toLowerCase().indexOf(sub.toLowerCase());
		const endIndex = startIndex + sub.length;
		const before = string.substr(0, startIndex);
		const after = string.substr(endIndex, string.length);
		const selectedString = string.substr(startIndex, sub.length);

		return (
			<p className='person-button__name'>
				{before}
				<span className='person-button__selection'>{selectedString}</span>
				{after}
			</p>
		);
	}

	focusMarker(zoom, coords) {
		this.props.setZoom(zoom);
		this.props.setCoords(coords);
	}

	render() {
		const { data, searchValue } = this.props;

		return (
			<button 
				className='person-button'
				onClick={() => this.focusMarker(5, [data.pos[0], data.pos[1]])}
			>
				{
					searchValue === '' ? 
						(<p className='person-button__name'>{data.name}</p>) : 
						(this.getUnderline(data.name, searchValue))
				}
				<p className='person-button__post'>{data.post}</p>
			</button>
		);
	}
}
