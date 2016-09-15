import React from 'react';

export default class TodoInput extends React.Component {
	render() {
		return (
			<div>
				<input 
						placeholder="type your todo" 
						onChange={this.props.handleInput}
						onKeyDown={this.props.handleKeyDown}
						value={this.props.inputValue}
				/>
				<button onClick={this.props.handleSubmit}> 
						Submit 
				</button>
			</div>
		);
	}
}