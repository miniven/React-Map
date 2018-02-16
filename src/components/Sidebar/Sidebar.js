import React from 'react';
import SVGInline from 'react-svg-inline';
import Logo from './lp-logo.svg';

import './Sidebar.scss';

import SearchField from '../SearchField/SearchField';
import SearchList from '../SearchList/SearchList';
import SortButtonContainer from '../../containers/SortButtonContainer';

const Sidebar = ({ searchValue, handleChange, employeeList, departments, sortedBy }) => {
	let filterResult = null;

	if (employeeList.length > 0) {
		filterResult = (
			<SearchList 
				searchValue={searchValue} 
				employeeList={employeeList}
				departments={departments}
				sortedBy={sortedBy}
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
					<SortButtonContainer type='NAME'>A–Я</SortButtonContainer>
					<SortButtonContainer type='DIVISION'>Отделы</SortButtonContainer>
					<SortButtonContainer type='POST'>Должности</SortButtonContainer>
				</div>
			</div>
			{filterResult}
		</aside>
	);
};

export default Sidebar;