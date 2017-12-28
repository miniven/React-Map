import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Scheme from '../Scheme/Scheme';

import './App.scss';

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<div className='app__sidebar'>
					<Sidebar />
				</div>
				<main className='app__main'>
					<Scheme />
				</main>
			</div>
		);
	}
}
