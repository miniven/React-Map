import React, { Component } from 'react';
import searchIcon from './search-icon.svg';
import './SearchField.scss';

export default class SearchField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			focused: false
		};

		// Binding
		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleFocus(event) {
		this.setState({
			focused: !this.state.focused
		});
	}

	render() {
		return (
			<div className={this.state.focused ? 'search search--focused' : 'search'}>
				<input
					className='search__input'
					value={this.state.value}
					onChange={this.handleChange}
					onFocus={this.handleFocus}
					onBlur={this.handleFocus}
				/>
				<img
					className='search__icon' 
					src={searchIcon} 
					alt='Найти'
				/>
			</div>
		);
	}
}
