import React from 'react';
import TodoInput from './TodoInput';
import TodoBoard from './TodoBoard';
import { storedTodos } from './db';
import { connect } from 'react-redux';
import { addTodo, loadTodos, handleInput } from '../redux/actions';

class TodoApp extends React.Component {
	componentDidMount() {
		// call to server
		storedTodos((data: Array<string>) => {
			this.props.dispatch(loadTodos(data));
		})
	}

	handleInput = (event) => {
		this.props.dispatch(handleInput(event.target.value))
		// this.setState({ inputValue: event.target.value});
	}

	// const array = [1, 2, 3];
	// const array2 = [...array, 4];
	// array2 = [1, 2, 3, 4];
	// const obj = { a: 1, b: 2};
	// const obj2 = { ...obj, c: 3};
	// const obj2 = { a: 1, b: 2, c: 3}
	handleSubmit = () => {
		const { inputValue, dispatch } = this.props;
		dispatch(addTodo(inputValue));
	}

	handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			this.handleSubmit();
		}
	}

	handleDelete = (deletingIndex) => {
		// this.setState({
		// 	myTodos: this.state.myTodos.filter(
		// 		(todo, index) => index !== deletingIndex
		// 	)
		// })
	}

	render() {
		return (
			<div>
				<h1>To Do App</h1>
				<TodoInput 
					handleInput={this.handleInput}
					handleKeyDown={this.handleKeyDown}
					inputValue={this.props.inputValue}
					handleSubmit={this.handleSubmit}
				/>
				<TodoBoard 
					myTodos={this.props.myTodos}
					handleDelete={this.handleDelete}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		myTodos: state.todo.myTodos,
		inputValue: state.todo.inputValue
	}
}

let ReduxTodoApp = connect(mapStateToProps)(TodoApp);
export default ReduxTodoApp;