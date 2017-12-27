import React, { Component } from 'react';
import './SortButton.scss';

export default class SortButton extends Component {
	getClassName() {
		return this.props.sortedBy === this.props.type ? 'sort-button sort-button--active' : 'sort-button'
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
