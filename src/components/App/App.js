import React, { Component } from 'react';

import OfficeMapContainer from '../../containers/OfficeMapContainer';
import SidebarContainer from '../../containers/SidebarContainer';
import ModalContainer from '../../containers/ModalContainer';

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
				</main>
				<ModalContainer />
			</div>
		);
	}
}
