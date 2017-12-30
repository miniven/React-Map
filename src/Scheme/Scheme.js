import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SVGInline from 'react-svg-inline';
import SchemeSVG from './scheme.svg';
import SVG from 'svg.js';
import Point from '../Point/Point';

import './Scheme.scss';

export default class Scheme extends Component {
	componentDidMount() {
		const schemeSVG = SVG(this.scheme.querySelector('svg'));
		const group = schemeSVG.group();
		const list = this.props.list;

		ReactDOM.render(
			<g>
				{list.map((employee, index) => {
					return (
						<Point 
							key={index} 
							data={employee} 
							handleClick={event => console.log(event.target)}
						/>
					);
				})}
			</g>,
			group.node
		);
	}

	render() {
		return (
			<div className='scheme' ref={scheme => this.scheme = scheme}>
				<SVGInline svg={SchemeSVG} />
			</div>
		);
	}
}
