import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// Styles

import 'normalize.css';
import './index.scss'

// Components //

import App from './components/App/App';

// Reducers

import reducer from './reducers';

const store = createStore(reducer);

store.dispatch({ 
	type: 'ADD_EMPLOYEE', 
	name: "Вениамин Трепачко", 
	post: "Крутой разработчик", 
	division: "Отдел разработки", 
	pos: [47, 71] 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE', 
	name: "Мария Трепачко", 
	post: "Дизайнер", 
	division: "Отдел дизайна", 
	pos: [62, 68.2] 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE', 
	name: "Гендальф Серый", 
	post: "Маг", 
	division: "Отдел братства", 
	pos: [70, 70] 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE', 
	name: "Василий Петров", 
	post: "Маркетолог", 
	division: "Отдел разработки", 
	pos: [80, 70] 
});
store.dispatch({ type: 'SORT_BY_NAME' });
store.dispatch({ type: 'SET_MAP_ZOOM', zoom: 3 });
store.dispatch({ type: 'SET_MAP_COORDS', coords: [0, 0] });

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);