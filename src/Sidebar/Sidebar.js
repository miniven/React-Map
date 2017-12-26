import React, { Component } from 'react';
import Logo from './lp-logo.svg';
import './Sidebar.scss';

import SearchBox from '../SearchBox/SearchBox';

const list = [
	{
		name: "Вениамин Трепачко",
		post: "Должность"
	},
	{
		name: "Мария Трепачко",
		post: "Должность"
	},
	{
		name: "Семен Петров",
		post: "Должность"
	},
	{
		name: "Василий Евгениевич",
		post: "Должность"
	}
];

export default class Sidebar extends Component {
	render() {
		return (
			<aside className='sidebar'>
				<div className='sidebar__block sidebar__block--dark'>
					<div className='sidebar__logo-wrap'>
						<img className='sidebar__logo' src={Logo} alt='LINKPROFIT'/>
					</div>
				</div>
				<div className='sidebar__block'>
					<SearchBox list={list.sort((prev, cur) => prev.name > cur.name ? 1 : -1)}/>
				</div>
			</aside>
		);
	}
}
