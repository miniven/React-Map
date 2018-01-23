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

	handleClick() {
		// const node = this.props.point.node;
		// const pos = node.getBBox();

		// console.log(node);
	}

	render() {
		const { data, searchValue } = this.props;

		return (
			<button 
				className='person-button'
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
