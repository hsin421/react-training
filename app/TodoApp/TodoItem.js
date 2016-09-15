/* @flow */
import React from 'react';

export default class TodoItem extends React.Component {
	handleDelete = () => {
		this.props.handleDelete(this.props.index)
	}

	render() {
		const { todo, handleDelete } = this.props;
		return (
			<li> 
				{todo} 
				<button 
					onClick={this.handleDelete}
				> 
				x 
				</button> 
			</li>
		)
	}
}