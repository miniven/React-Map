import React, { Component } from 'react';
import './SearchBox.scss';

import SearchField from '../SearchField/SearchField';
import SearchList from '../SearchList/SearchList';

export default class SearchBox extends Component {
	constructor(props) {
		super(props);

		this.list = this.props.list;
		this.state = {
			value: ''
		};

		// Binding
		this.handleChange = this.handleChange.bind(this);
		this.sortList = this.sortList.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
		this.sortList(event.target.value);
	}

	sortList(string) {
		this.list = this.props.list.filter(item => item.name.toLowerCase().indexOf(string.toLowerCase()) >= 0);
	}

	render() {
		return (
			<div className='search-box'>
				<SearchField value={this.state.value} handleChange={this.handleChange}/>
				<SearchList list={this.list}/>
			</div>
		);
	}
}
