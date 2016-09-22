/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions';

class TodoItem extends React.Component {
	handleDelete = () => {
		this.props.dispatch(deleteTodo(this.props.index));
	}

	render() {
		const { 
			todo, 
			handleDelete,
			index, 
			isSaving, 
			todoArrayLength } = this.props;
		const shouldGreyOut = isSaving && index === todoArrayLength - 1;
		return (
			<li style={shouldGreyOut ? {color: 'grey'} : null}> 
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
// connect: (
// mapStateToProps: Function, 
// mapDispatchToProps
// ) => React$Elment
export default connect()(TodoItem);