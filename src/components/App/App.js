import React, { Component } from 'react';

import OfficeMapContainer from '../../containers/OfficeMapContainer';
import SidebarContainer from '../../containers/SidebarContainer';

import './App.scss';

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<div className='app__sidebar'>
					<SidebarContainer />
				</div>
				<main className='app__main'>
					<OfficeMapContainer />
					{/*<Scheme 
						addToNodeList={this.addToNodeList}
						setCurrentPoint={this.setCurrentPoint}
						toggleModal={this.toggleModal}
						list={storeState.employeeList}
						scale={this.state.scale}
						currentPoint={this.state.currentPoint}
						currentNode={currentNode}
					/>*/}
				</main>
				{/*<Modal 
					point={this.state.currentPoint}
					toggleModal={this.toggleModal}
					isOpen={this.state.modalIsOpen}
					setTransform={this.setTransform}
				/>*/}

			</div>
		);
	}
}
