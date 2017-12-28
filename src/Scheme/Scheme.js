import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import SchemeSVG from './scheme.svg';

import './Scheme.scss';

export default class Scheme extends Component {
	render() {
		return (
			<div>
				<SVGInline svg={SchemeSVG} />
			</div>
		);
	}
}
