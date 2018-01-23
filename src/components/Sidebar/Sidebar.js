import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import Logo from './lp-logo.svg';

import './Sidebar.scss';

import SearchField from '../SearchField/SearchField';
import SearchList from '../SearchList/SearchList';
import SortButton from '../SortButton/SortButton';

export default class Sidebar extends Component {
	render() {
		const { 
			searchValue, 
			handleChange, 
			employeeList,
			sortedBy,
			setSortBy
		} = this.props;

		let filterResult = null;

		if (employeeList.length > 0) {
			filterResult = (
				<SearchList 
					searchValue={searchValue} 
					employeeList={employeeList}
				/>
			);
		} else {
			filterResult = <p className='sidebar__message'>Кажется, сотрудник с таким именем не работает в компании. Попробуйте поискать другого.</p>;
		};

		return (
			<aside className='sidebar'>
				<div className='sidebar__block sidebar__block--dark'>
					<div className='sidebar__logo'>
						<SVGInline svg={Logo} />
					</div>
				</div>
				<div className='sidebar__block'>
					<SearchField 
						value={searchValue}
						handleChange={handleChange}
					/>
					<div className='sidebar__sort-block'>
						<SortButton 
							type='NAME' 
							sortedBy={sortedBy} 
							setSortBy={setSortBy}
						>А-Я
						</SortButton>
						<SortButton 
							type='DIVISION' 
							sortedBy={sortedBy} 
							setSortBy={setSortBy}
						>Отделы
						</SortButton>
					</div>
				</div>
				{filterResult}
			</aside>
		);
	}
}
