import {FETCH_WEATHER_BSAS,FETCH_WEATHER_STGO,FETCH_WEATHER_LMA
  ,FETCH_WEATHER_SP,FETCH_WEATHER} from '../actions/index';

export default function(state = [],action){
  switch (action.type) {
    case FETCH_WEATHER:
        console.log('state:',state);
        return [...action.payload];
        break;

    default:
      return state;

  }
}
