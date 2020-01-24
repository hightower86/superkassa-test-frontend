import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

//const initialState = {};

//const middleware = [];

const store = createStore(
  rootReducer,
  composeWithDevTools() //applyMiddleware(...middleware))
);

export default store;
