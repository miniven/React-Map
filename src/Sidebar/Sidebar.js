import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import Logo from './lp-logo.svg';

import './Sidebar.scss';

import SearchField from '../SearchField/SearchField';
import SearchList from '../SearchList/SearchList';
import SortButton from '../SortButton/SortButton';

export default class Sidebar extends Component {
	render() {
		let filterResult = null;

		if (this.props.list.length > 0) {
			filterResult = <SearchList searchValue={this.props.searchValue} list={this.props.list.sort(this.props.sortFunc)}/>;
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
					<SearchField value={this.props.searchValue} handleChange={this.props.handleChange}/>
					<div className='sidebar__sort-block'>
						<SortButton type='name' sortedBy={this.props.sortedBy} setSortBy={this.props.setSortBy}>А-Я</SortButton>
						<SortButton type='division' sortedBy={this.props.sortedBy} setSortBy={this.props.setSortBy}>Отделы</SortButton>
					</div>
				</div>
				{filterResult}
			</aside>
		);
	}
}
