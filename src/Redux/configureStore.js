import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import appReducer from './App/App';
import { filterReducer } from './components/navigation/navigation'
import weatherIconsReducer from './components/weather/weather'
const rootReducer = combineReducers({
  cities: appReducer,
  filter: filterReducer,
  weatherIcons: weatherIconsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
