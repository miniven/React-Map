import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import employees from './employees.json';

// Styles

import 'normalize.css';
import './index.scss'

// Components //

import App from './components/App/App';

// Reducers

import reducer from './reducers';

const store = createStore(reducer);

employees.forEach((employee) => {
	store.dispatch({ 
		type: 'ADD_EMPLOYEE',
		firstLetter: employee.name[0].toUpperCase(),
		...employee
	});
});

console.log(store.getState());

store.dispatch({ type: 'SORT_BY_NAME' });
store.dispatch({ type: 'SET_MAP_ZOOM', zoom: 3 });
store.dispatch({ type: 'SET_MAP_COORDS', coords: [0, 0] });

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);