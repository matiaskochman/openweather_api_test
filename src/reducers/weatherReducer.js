import {FETCH_WEATHER_BSAS,FETCH_WEATHER_STGO,FETCH_WEATHER_LMA
  ,FETCH_WEATHER_SP,FETCH_WEATHER} from '../actions/index';

export default function(state = [],action){
  switch (action.type) {
    case FETCH_WEATHER_STGO:
      return [{id:1,name:'SANTIAGO',temp:action.payload}, ...state];
      break;
    case FETCH_WEATHER_BSAS:
      return [{id:2,name:'BUENOS AIRES',temp:action.payload}, ...state];
      break;
    case FETCH_WEATHER_LMA:
      return [{id:3,name:'LIMA',temp:action.payload}, ...state];
      break;
    case FETCH_WEATHER_SP:
      return [{id:4,name:'SAO PAULO',temp:action.payload}, ...state];
      break;
    case FETCH_WEATHER:
        return [...action.payload, ...state];
        break;

    default:
      return state;

  }
}
