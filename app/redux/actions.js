export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const HANDLE_INPUT = 'HANDLE_INPUT';
export const ADD_TODO_BEGIN = 'ADD_TODO_BEGIN';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';

import { saveTodo } from '../TodoApp/db';

export function loadTodos(todos) {
  return {
    type: LOAD_TODOS,
    payload: { todos } //  ES6 for { todos: todos }
  }
}

// export const addTodo = (newTodo: string) => {
//   return {
//     type: ADD_TODO,
//     payload: { newTodo }
//   }
// }

export const addTodoBegin = (newTodo) => {
	return {
		type: ADD_TODO_BEGIN,
		payload: { newTodo }
	}
};

export const addTodoSuccess = (message) => {
	return {
		type: ADD_TODO_SUCCESS,
		message
	}
}

export const addTodoError = (message) => {
	return {
		type: ADD_TODO_ERROR,
		message
	}
};

export const addTodo = (newTodo) => {
	return dispatch => {
		dispatch(addTodoBegin(newTodo));
		return saveTodo(
			response => {
				if (response.error) {
					dispatch(addTodoError(response.message))
				} else {
					dispatch(addTodoSuccess(response.message))
				}
			}
		)
	}
}

export const handleInput = (input) => {
	return {
		type: HANDLE_INPUT,
		payload: { input }
	}
}