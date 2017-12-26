import React from 'react';
import ReactDOM from 'react-dom';

// Styles

import 'normalize.css';
import './index.scss'

// Components //

import SearchBox from './SearchBox/SearchBox';

const list = [
	"Вениамин Трепачко",
	"Someone else"
];

ReactDOM.render(
	<SearchBox list={list}/>,
	document.querySelector('#app')
);