import React, { Component } from 'react';
import './SearchList.scss';
import './Department.scss';

import PersonButtonContainer from '../../containers/PersonButtonContainer';

export default class SearchList extends Component {
	render() {
		const { employeeList, searchValue, departments, sortedBy } = this.props;

		const getGroups = sorting => {
			let key;

			switch(sorting) {
				case 'NAME':
					key = 'name';
					break;
				case 'DIVISION':
					key = 'division';
					break;
				case 'POST':
					key = 'post';
					break;
				default:
					key = 'name';
					break;
			};

			if (sorting === 'NAME') {
				return employeeList.reduce((result, current) => {
					return {
						...result,
						[current[key][0]]: result[current[key][0]] !== undefined ? [...result[current[key][0]], current.id] : [current.id]
					};
				}, {});
			};

			return employeeList.reduce((result, current) => {
				return {
					...result,
					[current[key]]: result[current[key]] !== undefined ? [...result[current[key]], current.id] : [current.id]
				};
			}, {});
		};

		const groups = getGroups(sortedBy);

		const fullList = Object.keys(groups).map(name => {
			const employeeIDs = groups[name];

			return (
				<li key={name} className='department'>
					<p className='department__title'>{name}</p>
					<ul className='department__list'>
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
