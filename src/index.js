import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import employees from './employees.json';
import markers from './markers.json';

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

store.dispatch({
  type: 'SET_MARKERS',
  data: markers
});

store.dispatch({ type: 'SORT_BY_NAME' });

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);