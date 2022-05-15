import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import appReducer from './app/app';
const rootReducer = combineReducers({
  cities: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
