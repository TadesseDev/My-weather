import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import appReducer from './app/app';
import { filterReducer } from './components/navigation/navigation'
const rootReducer = combineReducers({
  cities: appReducer,
  filter: filterReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
