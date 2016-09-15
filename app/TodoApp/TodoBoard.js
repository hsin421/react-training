/* @flow */
import React from 'react';
import TodoItem from './TodoItem';

type Props = {
	myTodos: Array<string>
};

export default class TodoBoard extends React.Component {
	props: Props;
	render() {
		const todoBoardStyle = {
			width: 250,
			height: 500,
			border: '1px solid black'
		};

		const todos = this.props.myTodos.map(
			(todo, index) =>
			 <TodoItem 
				todo={todo} 
				handleDelete={this.props.handleDelete}
				index={index}
			/>
		);

		return (
			<div style={todoBoardStyle}>
				<ul>
					{this.props.myTodos.length > 0 ? todos : 'Loading please wait...'}
				</ul>
			</div>
		);
	}
}