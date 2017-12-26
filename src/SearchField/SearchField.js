import React, { Component } from 'react';
import searchIcon from './search-icon.svg';
import './SearchField.scss';

export default class SearchField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			focused: false
		};

		// Binding
		this.handleFocus = this.handleFocus.bind(this);
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
					value={this.props.value}
					onChange={this.props.handleChange}
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
