import React from 'react';
import ReactDOM from 'react-dom';

// Styles

import 'normalize.css';
import './index.scss'

// Components //

import Sidebar from './Sidebar/Sidebar';

ReactDOM.render(
	<Sidebar />,
	document.querySelector('#app')
);