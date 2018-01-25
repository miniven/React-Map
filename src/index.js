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
	posX: 50, 
	posY: 50 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE', 
	name: "Мария Трепачко", 
	post: "Дизайнер", 
	division: "Отдел дизайна", 
	posX: 50, 
	posY: 60 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE', 
	name: "Гендальф Серый", 
	post: "Маг", 
	division: "Отдел братства", 
	posX: 50, 
	posY: 70 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE', 
	name: "Василий Петров", 
	post: "Маркетолог", 
	division: "Отдел разработки", 
	posX: 50, 
	posY: 80 
});
store.dispatch({ type: 'SORT_BY_NAME' });

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);

// renderApp();
// store.subscribe(renderApp);