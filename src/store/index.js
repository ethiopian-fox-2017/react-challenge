import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import mainReducer from '../reducers';

const middlewares = applyMiddleware(logger, thunk);
const store = createStore(mainReducer, middlewares);

export default store;
