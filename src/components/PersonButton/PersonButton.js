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

		if (selectedString.toLowerCase() === sub.toLowerCase()) {
			return (
				<p className={className}>
					{before}
					<span className='person-button__selection'>{selectedString}</span>
					{after}
				</p>
			);
		} else {
			return (
				<p className={className}>{string}</p>
			);
		};
	}

	focusMarker(zoom, coords) {
		this.props.setZoom(zoom);
		this.props.setCoords(coords);
		this.props.toggleSidebar();
	}

	render() {
		const { data, searchValue, filter} = this.props;

		return (
			<button 
				className='person-button'
				onClick={() => this.focusMarker(5, [data.pos[0], data.pos[1]])}
			>
				{
					searchValue === '' ? 
						(
							<div>
								<p className='person-button__name'>{data.name}</p>
								<p className='person-button__post'>{data.post}</p>
							</div>
						) :
						(
							<div>
								{this.getUnderline(data.name, searchValue, 'person-button__name')}
								{this.getUnderline(data.post, searchValue, 'person-button__post')}
							</div>
						)
				}
			</button>
		);
	}
}
