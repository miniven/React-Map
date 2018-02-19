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
	id: '1',
	name: 'Вениамин Трепачко', 
	post: 'Крутой разработчик', 
	division: 'Отдел разработки', 
	pos: [71, 47] 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE',
	id: '2',
	name: 'Фродо Беггинс', 
	post: 'Хоббит', 
	division: 'Отдел дизайна', 
	pos: [68.2, 62] 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE',
	id: '3',
	name: 'Гендальф Серый', 
	post: 'Маг', 
	division: 'Отдел братства', 
	pos: [70, 70] 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE',
	id: '4',
	name: 'Василий Петров', 
	post: 'Маркетолог', 
	division: 'Отдел братства', 
	pos: [70, 80] 
});
store.dispatch({ 
	type: 'ADD_EMPLOYEE',
	id: '5',
	name: 'Оби Ван Кеноби', 
	post: 'Магистр-джедай', 
	division: 'Отдел борьбы с ситхами', 
	pos: [74, 84] 
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