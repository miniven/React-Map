import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Scheme from '../Scheme/Scheme';
import Modal from '../Modal/Modal';

import './App.scss';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: '',
			modalIsOpen: false,
			currentPoint: null,
			sortedBy: 'name',
			scale: 1,
			translatePos: {},
			sortFunc: (prev, cur) => (prev.name > cur.name ? 1 : -1),
			initialList: [
				{
					name: "Вениамин Трепачко",
					post: "Должность",
					division: "Отдел разработки",
					pos: {
						x: 850,
						y: 700
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
		this.toggleModal = this.toggleModal.bind(this);
		this.setCurrentPoint = this.setCurrentPoint.bind(this);
		this.setScale = this.setScale.bind(this);
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

	toggleModal() {
		this.setState({
			modalIsOpen: !this.state.modalIsOpen
		});
	}

	setSortBy(prop) {		
		this.setState({
			sortedBy: prop,
			sortFunc: (prev, cur) => prev[prop] > cur[prop] ? 1 : -1
		});
	}

	setCurrentPoint(data, node) {
		this.setState({
			currentPoint: {data, node}
		});
	}

	setScale(num, pos) {
		this.setState({
			scale: num,
			translatePos: pos
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
						sortFunc={this.state.sortFunc}
						list={this.state.list}
						point={this.state.currentPoint}
						setCurrentPoint={this.setCurrentPoint}
						setScale={this.setScale}
					/>
				</div>
				<main className='app__main'>
					<Scheme 
						setCurrentPoint={this.setCurrentPoint}
						toggleModal={this.toggleModal}
						list={this.state.list}
						scale={this.state.scale}
						translatePos={this.state.translatePos}
					/>
				</main>
				<Modal 
					point={this.state.currentPoint}
					toggleModal={this.toggleModal}
					isOpen={this.state.modalIsOpen}
					setScale={this.setScale}
				/>
			</div>
		);
	}
}
