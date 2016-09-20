export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const HANDLE_INPUT = 'HANDLE_INPUT';

export function loadTodos(todos) {
  return {
    type: LOAD_TODOS,
    payload: { todos } //  ES6 for { todos: todos }
  }
}

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: { newTodo }
  }
}

export const handleInput = (input) => {
	return {
		type: HANDLE_INPUT,
		payload: { input }
	}
}