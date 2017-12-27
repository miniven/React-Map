import React from 'react';
import ReactDOM from 'react-dom';

// Styles

import 'normalize.css';
import './index.scss'

// Components //

import Sidebar from './Sidebar/Sidebar';

const list = [
	{
		name: "Вениамин Трепачко",
		post: "Должность",
		division: "Отдел разработки"
	},
	{
		name: "Мария Трепачко",
		post: "Должность",
		division: "Отдел разработки"
	},
	{
		name: "Семен Петров",
		post: "Должность",
		division: "Отдел дизайна"
	},
	{
		name: "Василий Евгениевич",
		post: "Должность",
		division: "Отдел маркетинга"
	}
];

ReactDOM.render(
	<Sidebar list={list}/>,
	document.querySelector('#app')
);