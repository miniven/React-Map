import React, { Component } from 'react';

import OfficeMapContainer from '../../containers/OfficeMapContainer';
import SidebarContainer from '../../containers/SidebarContainer';
import ModalContainer from '../../containers/ModalContainer';
import LogoContainer from '../../containers/LogoContainer';

import './App.scss';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sidebarIsVisible: false
		};

		this.toggleSidebar = this.toggleSidebar.bind(this);
	}

	toggleSidebar() {
		this.setState({
			sidebarIsVisible: !this.state.sidebarIsVisible
		});
	}

	render() {
		return (
			<div className='app'>
				<div className={`app__sidebar ${this.state.sidebarIsVisible ? 'app__sidebar--visible' : ''}`}>
					<SidebarContainer toggleSidebar={this.toggleSidebar}/>
				</div>
				<main className='app__main'>
					<OfficeMapContainer />
				</main>
				<LogoContainer />
				<ModalContainer />
			</div>
		);
	}
}
