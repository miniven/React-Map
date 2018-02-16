import React, { Component } from 'react';
import './SearchList.scss';
import './Department.scss';

import PersonButtonContainer from '../../containers/PersonButtonContainer';

export default class SearchList extends Component {
	render() {
		const { employeeList, searchValue, departments, sortedBy } = this.props;
		
		const fullList = employeeList.map((item, index) => {
			return (
				<li key={index} className='search-list__item'>
					<PersonButtonContainer 
						searchValue={searchValue} 
						data={item}
					/>
				</li>
			);
		});

		const departmentsList = Object.keys(departments).map(name => {
			const employeeIDs = departments[name];

			return (
				<li key={name} className='department'>
					<p className='department__title'>{name}</p>
					<ul className='department__list'>
						{
							employeeIDs.map(employeeID => {
								const employee = employeeList.find(employee => Number(employee.id) === employeeID);

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
			<ul className='search-list'>{ sortedBy === 'DIVISION' ? departmentsList : fullList }</ul>
		);
	}
}
