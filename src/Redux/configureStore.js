import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import appReducer from './app/app';
import searchReducer from './components/navigation/navigation'
const rootReducer = combineReducers({
  cities: appReducer,
  cities: searchReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
