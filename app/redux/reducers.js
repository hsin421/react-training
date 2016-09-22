import { 
	LOAD_TODOS, 
	ADD_TODO, 
	HANDLE_INPUT,
	ADD_TODO_SUCCESS,
	ADD_TODO_BEGIN,
	ADD_TODO_ERROR
} from './actions.js';
import { 
	LOAD_PRODUCTS, 
	ADD_TO_CART, 
	REMOVE_FROM_CART } from './shoppingCartActions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

function todo(state = {}, action) {
  switch (action.type) {
    case ADD_TODO_BEGIN:
    	// return Object.assign(state, {}, {
    	// 	myTodos: [...state.myTodos, action.payload.newTodo]
    	// });
      return {
      	...state,
      	myTodos: [...state.myTodos, action.payload.newTodo],
      	inputValue: '',
      	isSaving: true,
      	error: null
      };

    case ADD_TODO_SUCCESS:
	    return {
	      	...state,
	      	isSaving: false,
	      	error: null
	    };

	  case ADD_TODO_ERROR:
	    return {
	      	...state,
	      	myTodos: state.myTodos.filter(
	      		(todo, index) => index !== state.myTodos.length - 1
      		),
	      	isSaving: false,
	      	error: action.message
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
    case ADD_TO_CART:
    	const isRTPAlreadyThere = state.myTodos.indexOf('Remember to pay') !== -1;
    	return {
    		...state,
    		myTodos: isRTPAlreadyThere ? state.myTodos : [...state.myTodos, 'Remember to pay']
    	}
    default:
      return state
  }
}

const shoppingCart = (state = {}, action) => {
	 switch (action.type) {
	 	case LOAD_PRODUCTS:
	 		return {
	 			...state,
	 			products: [...state.products, ...action.payload.products]
	 		}
	 	case ADD_TO_CART:
	 		return {
	 			...state,
	 			cart: [...state.cart, action.payload.product]
	 		}
	 	case REMOVE_FROM_CART:
	 		return {
	 			...state,
	 			cart: state.cart.filter(
		 		(item, itemIndex) => action.payload.index !== itemIndex)
	 		}
	 	default: 
	 		return state;
	 }
}

const rootReducer = combineReducers({
  todo,
  shoppingCart,
  form: formReducer
})

export default rootReducer