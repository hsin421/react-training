export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function loadTodos(todos) {
  return {
    type: LOAD_TODOS,
    todos //  todos: todos
  }
}

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    newTodo
  }
}