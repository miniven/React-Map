import React from 'react';
import './SortButton.scss';

const SortButton = ({ sortedBy, type, setSortBy, children }) => {
	const getClassName = (sortedBy, type) => {
		return `sort-button ${sortedBy === type ? 'sort-button--active' : ''}`;
	};

	return (
		<button 
			className={getClassName(sortedBy, type)}
			onClick={() => {
				setSortBy(type);
			}}
		>{children}</button>
	);
}

export default SortButton;