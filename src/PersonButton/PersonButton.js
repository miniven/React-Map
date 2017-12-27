import React, { Component } from 'react';
import './PersonButton.scss';

export default class PersonButton extends Component {
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

	render() {
		return (
			<button className='person-button'>
				{this.props.searchValue === '' ? <p className='person-button__name'>{this.props.data.name}</p> : this.getUnderline(this.props.data.name, this.props.searchValue)}
				<p className='person-button__post'>{this.props.data.post}</p>
			</button>
		);
	}
}
