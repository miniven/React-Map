import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import SchemeSVG from './scheme.svg';
import SVG from 'svg.js';

import './Scheme.scss';

export default class Scheme extends Component {
	componentDidMount() {
		const schemeSVG = this.scheme.querySelector('svg');
		const draw = SVG(schemeSVG);

		draw
			.rect(100, 100)
			.move(100, 50)
			.fill('#f06')
			.click((event) => console.log(event.target));
	}

	render() {
		return (
			<div className='scheme' ref={scheme => this.scheme = scheme}>
				<SVGInline svg={SchemeSVG} />
			</div>
		);
	}
}
