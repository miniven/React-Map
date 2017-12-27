import React, { Component } from 'react';
import './SortButton.scss';

export default class SortButton extends Component {
	getClassName() {
		return `sort-button ${this.props.sortedBy === this.props.type ? 'sort-button--active' : ''}`;
	}

	render() {
		return (
			<button 
				className={this.getClassName()}
				onClick={() => this.props.setSortBy(this.props.type)}
			>{this.props.children}</button>
		);
	}
}
