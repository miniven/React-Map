import React, { Component } from 'react';

import './Point.scss';

export default class Point extends Component {
	render() {
		const pointClassName = `point ${this.props.currentPoint === this.props.data.name ? 'point--visible' : 'point--hidden'}`;

		return (
			<g
				className='' 
				fill='#fff' 
				ref={ node => this.props.addToNodeList(this.props.data.name, node) }
				onClick={event => {
					this.props.setCurrentPoint(this.props.data);
					this.props.toggleModal();
				}}
			>
				<text 
					x={this.props.data.pos.x} 
					y={this.props.data.pos.y}
					fontFamily='Helvetica, Arial, sans-serif' 
					fill='#000'>
					<tspan dy='20.8' x={this.props.data.pos.x}>{this.props.data.name}</tspan>
				</text>
				<text 
					x={this.props.data.pos.x} 
					y={this.props.data.pos.y + 20}
					fontFamily='Helvetica, Arial, sans-serif' 
					fill='#000'>
					<tspan dy='20.8' x={this.props.data.pos.x}>{this.props.data.post}</tspan>
				</text>
			</g>
		);
	}
}
