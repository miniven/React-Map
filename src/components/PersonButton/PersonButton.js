import React, { Component } from 'react';
import './PersonButton.scss';

export default class PersonButton extends Component {
	constructor(props) {
		super(props);

		this.focusMarker = this.focusMarker.bind(this);
	}

	getUnderline(string, sub, className) {
		const startIndex = string.toLowerCase().indexOf(sub.toLowerCase());
		const endIndex = startIndex + sub.length;
		const before = string.substr(0, startIndex);
		const after = string.substr(endIndex, string.length);
		const selectedString = string.substr(startIndex, sub.length);

		return (
			<p className={className}>
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
		const { data, searchValue, filter} = this.props;

		if (filter === 'post') {
			return (
				<button 
					className='person-button'
					onClick={() => this.focusMarker(5, [data.pos[0], data.pos[1]])}
				>
					<p className='person-button__name'>{data.name}</p>
					{
						searchValue === '' ? 
							(<p className='person-button__post'>{data.post}</p>) : 
							(this.getUnderline(data.post, searchValue, 'person-button__post'))
					}
				</button>
			);
		} else {
			return (
				<button 
					className='person-button'
					onClick={() => this.focusMarker(5, [data.pos[0], data.pos[1]])}
				>
					{
						searchValue === '' ? 
							(<p className='person-button__name'>{data.name}</p>) : 
							(this.getUnderline(data.name, searchValue, 'person-button__name'))
					}
					<p className='person-button__post'>{data.post}</p>
				</button>
			);
		};
	}
}
