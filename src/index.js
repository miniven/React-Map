import React from 'react';
import ReactDOM from 'react-dom';

// Styles

import 'normalize.css';
import './index.scss'

// Components //

import SearchField from './SearchField/SearchField';

ReactDOM.render(
	<SearchField />,
	document.querySelector('#app')
);