import React, { Component } from 'react';
import './SearchList.scss';

import PersonButton from '../PersonButton/PersonButton';

export default class SearchList extends Component {
	render() {
		const list = this.props.list.map((item, index) => {
			return (
				<li key={index} className='search-list__item'>
					<PersonButton 
						setCurrentPoint={this.props.setCurrentPoint}
						searchValue={this.props.searchValue} 
						data={item}
					/>
				</li>
			);
		});

		return (
			<ul className='search-list'>{list}</ul>
		);
	}
}
