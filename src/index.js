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

store.dispatch({ type: 'ADD_EMPLOYEE', name: "Вениамин Трепачко", post: "Должность", division: "Отдел разработки" });
store.dispatch({ type: 'ADD_EMPLOYEE', name: "Мария Трепачко", post: "Дизайнер", division: "Отдел дизайна" });
store.dispatch({ type: 'ADD_EMPLOYEE', name: "Василий Петров", post: "Маркетолог", division: "Отдел разработки" });
store.dispatch({ type: 'SORT_BY_NAME' });

render(
	<Provider store={store}>
		<App store={store}/>
	</Provider>,
	document.querySelector('#root')
);

// renderApp();
// store.subscribe(renderApp);