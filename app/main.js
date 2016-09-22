/* @flow */
import React from 'react';
import { render } from 'react-dom';
import TodoApp from './TodoApp/TodoApp';
import ShoppingCart from './ShoppingCart';
import axios from 'axios';
import configureStore from './redux/store.js';
import { Provider } from 'react-redux';
import ReduxForm from './redux-form/form';

const initialState = {
	todo: {
		myTodos: [],
		inputValue: ''
	},
	shoppingCart: {
		products: [],
		cart: []
	}
};
const store = configureStore(initialState);

class App extends React.Component {
	render() {
		return (
			<div>
				<ShoppingCart />
				<TodoApp />
				<ReduxForm />
			</div>
		);
	}
}

render(
	<Provider store={store}> 
 		<App /> 
	</Provider>, document.getElementById('app'));
require('./createDevToolWindow.js')(store);