import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
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

// Middlewares

import thunk from 'redux-thunk';

// Actions

import { addEmployee, sortByName } from './actions/employee';
import { setMarkers } from './actions/markers';

const store = createStore(reducer, applyMiddleware(thunk));

employees.forEach((employee) => {
	store.dispatch(addEmployee(employee, employee.name[0].toUpperCase()));
});

store.dispatch(setMarkers(markers));

store.dispatch(sortByName());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);