import { 
	LOAD_TODOS, 
	ADD_TODO, 
	HANDLE_INPUT 
} from './actions.js';
import { 
	LOAD_PRODUCTS, 
	ADD_TO_CART, 
	REMOVE_FROM_CART } from './shoppingCartActions';
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
  shoppingCart
})

export default rootReducer