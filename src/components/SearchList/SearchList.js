import React, { Component } from 'react';
import './SearchList.scss';

import PersonButtonContainer from '../../containers/PersonButtonContainer';

export default class SearchList extends Component {
	render() {
		const { searchValue, employeeList, groups } = this.props;

		const fullList = Object.keys(groups).map(name => {
			const employeeIDs = groups[name];

			return (
				<li key={name}>
					<p className='search-list__subtitle'>{name}</p>
					<ul className='search-list__sublist'>
						{
							employeeIDs.map(employeeID => {
								const employee = employeeList.find(employee => Number(employee.id) === Number(employeeID));

								return (
									employee ? (
										<li key={employee.id} className='search-list__item'>
											<PersonButtonContainer 
												searchValue={searchValue} 
												data={employee}
											/>
										</li>
									) : null
								);
							})
						}
					</ul>
				</li>
			);
		});

		return (
			<ul className='search-list'>{fullList}</ul>
		);
	}
}
