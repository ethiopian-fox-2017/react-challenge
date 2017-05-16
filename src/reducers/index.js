import { combineReducers } from 'redux'

import todoReducer from './todoReducer'
import userReducer from './userReducer'
import loginReducer from './loginReducer'

const mainReducer = combineReducers({
  todos: todoReducer,
  users: userReducer,
  loginStatus: loginReducer,
})

export default mainReducer;
