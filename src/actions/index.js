import axios from 'axios';

const API_KEY = '221677b0488949888a4644c604039cf5';

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(idArray){
  var dateNow = new Date();

  let urlArray = [] // unknown # of urls (1 or more)
  let promiseArray = [];
  for (let countryId of idArray) {
    urlArray.push(`${WEATHER_URL}&id=${countryId}`);
  }

  promiseArray = urlArray.map(url_by_id => axios.get(url_by_id)); // or whatever

  return (dispatch) => {
    axios.all(promiseArray)
    .then(function(results) {
      let cities = results.map(r => {
        return r.data;
      });

      var array = [];
      for(let data of cities){

        if(data.name === 'Buenos Aires'){
            var obj = {id:2,name:data.name,temp:data.main.temp,date:dateNow}
            array.push(obj);
        }else if(data.name === 'Santiago'){

          var obj = {id:1,name:data.name,temp:data.main.temp,date:dateNow}
          array.push(obj);

        }else if(data.name === 'Lima'){

          var obj = {id:3,name:data.name,temp:data.main.temp,date:dateNow}
          array.push(obj);

        }else if(data.name === 'Sao Paulo'){

          var obj = {id:4,name:data.name,temp:data.main.temp,date:dateNow}
          array.push(obj);

        }
      }

      localStorage.setItem('temperature_log', array);
      dispatch({
        type:FETCH_WEATHER,
        payload:array
      });

    });

  }

}
