import React, { Component } from 'react';
import Logo from './lp-logo.svg';
import './Sidebar.scss';

import SearchField from '../SearchField/SearchField';
import SearchList from '../SearchList/SearchList';
import SortButton from '../SortButton/SortButton';

export default class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: '',
			sortedBy: 'name',
			sortFunc: (prev, cur) => (prev.name > cur.name ? 1 : -1),
			initialList: [
				{
					name: "Вениамин Трепачко",
					post: "Должность",
					division: "Отдел разработки"
				},
				{
					name: "Мария Трепачко",
					post: "Должность",
					division: "Отдел разработки"
				},
				{
					name: "Семен Петров",
					post: "Должность",
					division: "Отдел дизайна"
				},
				{
					name: "Василий Евгениевич",
					post: "Должность",
					division: "Отдел маркетинга"
				}
			],
			list: []
		};

		// Binding
		this.handleChange = this.handleChange.bind(this);
		this.filterList = this.filterList.bind(this);
		this.setSortBy = this.setSortBy.bind(this);
	}

	componentWillMount(){
		this.setState({list: this.state.initialList})
	}

	handleChange(event) {
		this.setState({
			searchValue: event.target.value
		});
		this.filterList(event.target.value);
	}

	filterList(string) {
		this.setState({
			list: this.state.initialList.filter(item => item.name.toLowerCase().indexOf(string.toLowerCase()) >= 0)
		});
	}

	setSortBy(prop) {
		this.setState({
			sortedBy: prop,
			sortFunc: (prev, cur) => prev[prop] > cur[prop] ? 1 : -1
		});
	}

	render() {
		let filterResult = null;

		if (this.state.list.length > 0) {
			filterResult = <SearchList searchValue={this.state.searchValue} list={this.state.list.sort(this.state.sortFunc)}/>;
		} else {
			filterResult = <p className='sidebar__message'>Кажется, сотрудник с таким именем не работает в компании. Попробуйте поискать другого.</p>;
		};

		return (
			<aside className='sidebar'>
				<div className='sidebar__block sidebar__block--dark'>
					<div className='sidebar__logo-wrap'>
						<img className='sidebar__logo' src={Logo} alt='LINKPROFIT'/>
					</div>
				</div>
				<div className='sidebar__block'>
					<SearchField value={this.state.searchValue} handleChange={this.handleChange}/>
					<div className='sidebar__sort-block'>
						<SortButton type='name' sortedBy={this.state.sortedBy} setSortBy={this.setSortBy}>А-Я</SortButton>
						<SortButton type='division' sortedBy={this.state.sortedBy} setSortBy={this.setSortBy}>Отделы</SortButton>
					</div>
				</div>
				{filterResult}
			</aside>
		);
	}
}
