import React, { Component } from 'react';
import './SearchList.scss';

import PersonButtonContainer from '../../containers/PersonButtonContainer';

export default class SearchList extends Component {
	render() {
		const { employeeList, searchValue } = this.props;
		
		const list = employeeList.map((item, index) => {
			return (
				<li key={index} className='search-list__item'>
					<PersonButtonContainer 
						searchValue={searchValue} 
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
