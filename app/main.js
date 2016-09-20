/* @flow */
import React from 'react';
import { render } from 'react-dom';
import TodoApp from './TodoApp/TodoApp';
import ShoppingCart from './ShoppingCart';
import axios from 'axios';
// import configureStore from './redux/store.js';
// import { Provider } from 'react-redux';

// const initialState = {todo: {myTodos: []}};
// const store = configureStore(initialState);

class App extends React.Component {
	render() {
		return <ShoppingCart />;
	}
}


render(<App />, document.getElementById('app'));
// render(
// 	<Provider store={store}> 
//  		<TodoApp /> 
// 	</Provider>, document.getElementById('app'));
// require('./createDevToolWindow.js')(store);