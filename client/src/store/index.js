import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middleWares = applyMiddleware(thunk,logger);
const store = createStore(rootReducer,middleWares);

export default store;
