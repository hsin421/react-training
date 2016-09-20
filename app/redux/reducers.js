import { 
	LOAD_TODOS, 
	ADD_TODO, 
	HANDLE_INPUT 
} from './actions.js';
import { combineReducers } from 'redux';

function todo(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
    	// return Object.assign(state, {}, {
    	// 	myTodos: [...state.myTodos, action.payload.newTodo]
    	// });
      return {
      	...state,
      	myTodos: [...state.myTodos, action.payload.newTodo],
      	inputValue: ''
      };

    case LOAD_TODOS:
    	return {
    		...state, 
    		myTodos: [...state.myTodos, ...action.payload.todos]
    	}

    case HANDLE_INPUT:
    	return {
    		...state,
    		inputValue: action.payload.input
    	}
    default:
      return state
  }
}

const shoppingCart = (state = {}, action) => {
	 switch (action.type) {

	 	default: 
	 		return state;
	 }
}

const rootReducer = combineReducers({
  todo,
  shoppingCart
})

export default rootReducer