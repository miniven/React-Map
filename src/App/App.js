import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Scheme from '../Scheme/Scheme';

import './App.scss';

export default class App extends Component {
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
					division: "Отдел разработки",
					pos: {
						x: 150,
						y: 150
					}
				},
				{
					name: "Мария Трепачко",
					post: "Должность",
					division: "Отдел разработки",
					pos: {
						x: 200,
						y: 250
					}
				},
				{
					name: "Семен Петров",
					post: "Должность",
					division: "Отдел дизайна",
					pos: {
						x: 250,
						y: 350
					}
				},
				{
					name: "Василий Евгениевич",
					post: "Должность",
					division: "Отдел маркетинга",
					pos: {
						x: 300,
						y: 450
					}
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
		return (
			<div className='app'>
				<div className='app__sidebar'>
					<Sidebar 
						searchValue={this.state.searchValue}
						handleChange={this.handleChange}
						sortedBy={this.state.sortedBy}
						setSortBy={this.setSortBy}
						list={this.state.list}
					/>
				</div>
				<main className='app__main'>
					<Scheme 
						list={this.state.list}
					/>
				</main>
			</div>
		);
	}
}
