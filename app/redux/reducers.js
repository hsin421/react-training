import { LOAD_TODOS, ADD_TODO } from './actions.js';
import { combineReducers } from 'redux';

function todo(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return {};
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todo
})

export default rootReducer