import React, { Component } from 'react';
import './SearchList.scss';

export default class SearchList extends Component {
	render() {
		const list = this.props.list.map((item, index) => {
			return (
				<li key={index} className='search-list__item'>
					<a className='search-list__link' href='#'>{item}</a>
				</li>
			);
		});

		return (
			<ul className='search-list'>{list}</ul>
		);
	}
}
