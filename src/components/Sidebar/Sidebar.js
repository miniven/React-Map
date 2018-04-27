import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import SidebarLogo from './lp-logo.svg';
import SidebarLogoSmall from './lp-logo_small.svg';
import TogglerImg from './toggler.svg';
import TogglerCloseImg from './toggler_close.svg';

import './Sidebar.scss';

import SearchField from '../SearchField/SearchField';
import SearchList from '../SearchList/SearchList';
import SortButtonContainer from '../../containers/SortButtonContainer';

class Sidebar extends Component {
	componentWillMount() {
		this.props.fetchList();
	}

	render() {
		const { searchValue, handleChange, getGroups, toggleSidebar, sidebarIsVisible, sortedBy, employeeList } = this.props;

		let filterResult = null;

		if (employeeList.length > 0) {
			filterResult = (
				<SearchList 
					searchValue={searchValue}
					employeeList={employeeList}
					toggleSidebar={toggleSidebar}
					groups={getGroups(employeeList, sortedBy)}
					sidebarIsVisible={sidebarIsVisible}
				/>
			);
		} else {
			filterResult = <p className='sidebar__message'>Кажется, сотрудник с таким именем не работает в компании. Попробуйте поискать другого.</p>;
		};

		return (
			<aside className='sidebar'>
				<div className='sidebar__block sidebar__block--dark'>
					<div className='sidebar__logo sidebar__logo--normal'>
						<SVGInline svg={SidebarLogo} className='sidebar__logo-svg'/>
					</div>
					<div className='sidebar__logo sidebar__logo--small'>
						<SVGInline svg={SidebarLogoSmall} className='sidebar__logo-svg'/>
					</div>
				</div>
				<div className='sidebar__block'>
					<button className='sidebar__toggle' onClick={toggleSidebar}>
						{ sidebarIsVisible ? <SVGInline svg={TogglerCloseImg} /> : <SVGInline svg={TogglerImg} /> }
					</button>
					<SearchField 
						value={searchValue}
						handleChange={handleChange}
					/>
					<div className='sidebar__sort-block'>
						<SortButtonContainer type='NAME'>A–Я</SortButtonContainer>
						<SortButtonContainer type='DIVISION'>Отделы</SortButtonContainer>
					</div>
				</div>
				{filterResult}
			</aside>
		);
	}
};

export default Sidebar;