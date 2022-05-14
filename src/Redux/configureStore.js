import { createStore, applyMiddleware, combineReducers } from "redux";
import appReducer from './App/App'
const rootReducer = combineReducers({
  cities: appReducer,
})

const store = createStore(rootReducer);
export default store;
