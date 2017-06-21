import { combineReducers } from 'redux';
import WeatherReducer from './weatherReducer'

const rootReducer = combineReducers({
  weatherState:WeatherReducer
});

export default rootReducer;
