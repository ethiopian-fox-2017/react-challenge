import {combineReducers } from 'redux';

import articelReducer from './articleReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
   articles:articelReducer,
   users :userReducer
})

export default rootReducer
