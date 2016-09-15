import React from 'react';
import TodoInput from './TodoInput';
import TodoBoard from './TodoBoard';
import { storedTodos } from './db';

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myTodos: [],
			inputValue: ''
		};
	}

	componentDidMount() {
		// call server
		storedTodos((data: Array<string>) => {
			this.setState({
				myTodos: [...this.state.myTodos, ...data]
			})
		})
	}

	handleInput = (event) => {
		this.setState({ inputValue: event.target.value});
	}

	handleSubmit = () => {
		const { myTodos, inputValue } = this.state;
		this.setState({
			myTodos: [...myTodos, inputValue],
			inputValue: ''
		})
	}

	handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			this.handleSubmit();
		}
	}

	handleDelete = (deletingIndex) => {
		this.setState({
			myTodos: this.state.myTodos.filter(
				(todo, index) => index !== deletingIndex
			)
		})
	}

	render() {
		return (
			<div>
				<h1>To Do App</h1>
				<TodoInput 
					handleInput={this.handleInput}
					handleKeyDown={this.handleKeyDown}
					inputValue={this.state.inputValue}
					handleSubmit={this.handleSubmit}
				/>
				<TodoBoard 
					myTodos={this.state.myTodos}
					handleDelete={this.handleDelete}
				/>
			</div>
		);
	}
}