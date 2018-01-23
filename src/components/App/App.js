import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
// import Scheme from '../Scheme/Scheme';
// import Modal from '../Modal/Modal';

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
			sortFunc: (prev, cur) => (prev.name > cur.name ? 1 : -1),
			list: [],
			nodeList: {}
		};

		// Binding
		this.handleChange = this.handleChange.bind(this);
		this.filterList = this.filterList.bind(this);
		this.setSortBy = this.setSortBy.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.setCurrentPoint = this.setCurrentPoint.bind(this);
		this.setTransform = this.setTransform.bind(this);
		this.addToNodeList = this.addToNodeList.bind(this);
	}

	componentWillMount(){
		this.setState({list: this.state.initialList})
	}

	handleChange(event) {
		this.setState({
			searchValue: event.target.value
		});
	}

	filterList(employeeList) {
		return employeeList.filter(item => item.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) >= 0);
	}

	toggleModal() {
		this.setState({
			modalIsOpen: !this.state.modalIsOpen
		});
	}

	setSortBy(name) {
		this.props.store.dispatch({ type: 'SET_SORT', name });

		switch(this.props.store.getState().sort) {
			case 'NAME':
				this.props.store.dispatch({ type: 'SORT_BY_NAME' });
				break;
			case 'DIVISION':
				this.props.store.dispatch({ type: 'SORT_BY_DIVISION' });
				break;
			default:
				break;
		};
	}

	setCurrentPoint(data) {
		this.setState({
			currentPoint: data
		});
	}

	setTransform(scale) {
		this.setState({
			scale
		});
	}

	addToNodeList(name, node) {
		const nodeList = this.state.nodeList;

		nodeList[name] = node;
		this.setState({
			nodeList
		});
	}

	render() {
		const currentNode = this.state.currentPoint ? this.state.nodeList[this.state.currentPoint.name] : null;
		const storeState = this.props.store.getState();

		return (
			<div className='app'>
				<div className='app__sidebar'>
					<Sidebar 
						searchValue={this.state.searchValue}
						sortedBy={storeState.sort}
						setSortBy={this.setSortBy}
						currentSort={storeState.sort}
						list={this.filterList(storeState.employeeList)}
						handleChange={this.handleChange}
					/>
				</div>

				{/*<main className='app__main'>
					<Scheme 
						addToNodeList={this.addToNodeList}
						setCurrentPoint={this.setCurrentPoint}
						toggleModal={this.toggleModal}
						list={storeState.employeeList}
						scale={this.state.scale}
						currentPoint={this.state.currentPoint}
						currentNode={currentNode}
					/>
				</main>
				<Modal 
					point={this.state.currentPoint}
					toggleModal={this.toggleModal}
					isOpen={this.state.modalIsOpen}
					setTransform={this.setTransform}
				/>*/}

			</div>
		);
	}
}
