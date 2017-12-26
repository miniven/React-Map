import React, { Component } from 'react';
import './PersonButton.scss';

export default class PersonButton extends Component {
	render() {
		return (
			<button className='person-button'>
				<p className='person-button__name'>{this.props.data.name}</p>
				<p className='person-button__post'>{this.props.data.post}</p>
			</button>
		);
	}
}
