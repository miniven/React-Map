import React, { Component } from 'react';
import Logo from './lp-logo.svg';
import './Sidebar.scss';

import SearchField from '../SearchField/SearchField';
import SearchList from '../SearchList/SearchList';
import SortButton from '../SortButton/SortButton';

export default class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.list = this.props.list;
		this.state = {
			value: '',
			sortedBy: 'name',
			sortFunc: (prev, cur) => prev.name > cur.name ? 1 : -1
		};

		// Binding
		this.handleChange = this.handleChange.bind(this);
		this.sortList = this.sortList.bind(this);
		this.setSortBy = this.setSortBy.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
		this.sortList(event.target.value);
	}

	sortList(string) {
		this.list = this.props.list.filter(item => item.name.toLowerCase().indexOf(string.toLowerCase()) >= 0);
	}

	setSortBy(prop) {
		this.setState({
			sortedBy: prop,
			sortFunc: (prev, cur) => prev[prop] > cur[prop] ? 1 : -1
		});
	}

	render() {
		return (
			<aside className='sidebar'>
				<div className='sidebar__block sidebar__block--dark'>
					<div className='sidebar__logo-wrap'>
						<img className='sidebar__logo' src={Logo} alt='LINKPROFIT'/>
					</div>
				</div>
				<div className='sidebar__block'>
					<SearchField value={this.state.value} handleChange={this.handleChange}/>
					<div className='sidebar__sort-block'>
						<SortButton type='name' sortedBy={this.state.sortedBy} setSortBy={this.setSortBy}>А-Я</SortButton>
						<SortButton type='division' sortedBy={this.state.sortedBy} setSortBy={this.setSortBy}>Отделы</SortButton>
					</div>
				</div>
				<SearchList list={this.list.sort(this.state.sortFunc)}/>
			</aside>
		);
	}
}
