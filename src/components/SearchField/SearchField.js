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
		const { value, handleChange } = this.props;
		
		return (
			<div className={this.state.focused || value.length > 0 ? 'search search--focused' : 'search'}>
				<input
					className='search__input'
					value={value}
					onChange={handleChange}
					onFocus={this.handleFocus}
					onBlur={this.handleFocus}
				/>
			</div>
		);
	}
};