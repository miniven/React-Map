import React, { Component } from 'react';
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
		const { searchValue, handleChange } = this.props;
		
		return (
			<div className={this.state.focused ? 'search search--focused' : 'search'}>
				<input
					className='search__input'
					value={searchValue}
					onChange={handleChange}
					onFocus={this.handleFocus}
					onBlur={this.handleFocus}
				/>
			</div>
		);
	}
};