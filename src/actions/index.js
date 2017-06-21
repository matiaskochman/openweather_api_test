import axios from 'axios';

const API_KEY = '221677b0488949888a4644c604039cf5';

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

//api.openweathermap.org/data/2.5/weather?id=2172797

export const FETCH_WEATHER_BSAS = 'FETCH_WEATHER_BSAS';
export const FETCH_WEATHER_STGO = 'FETCH_WEATHER_STGO';
export const FETCH_WEATHER_LMA = 'FETCH_WEATHER_LMA';
export const FETCH_WEATHER_SP = 'FETCH_WEATHER_SP';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchCityWeather(id,dateNow){

  //const url_by_name = `${WEATHER_URL}&q=${city},${countryCode}`;

  const url_by_id =  `${WEATHER_URL}&id=${id}`;
  const request = axios.get(url_by_id);

  return (dispatch) => {
    request.then(({data}) => {

      var objectLog = {city:data.name,date:dateNow,temp:date.main.temp};

      localStorage.setItem('cityLog',objectLog);

      if(data.name === 'Buenos Aires'){
        dispatch({
          type:FETCH_WEATHER_BSAS,
          payload:data.main.temp
        });
      }else if(data.name === 'Santiago'){
        dispatch({
          type:FETCH_WEATHER_STGO,
          payload:data.main.temp
        });
      }else if(data.name === 'Lima'){
        dispatch({
          type:FETCH_WEATHER_LMA,
          payload:data.main.temp
        });
      }else if(data.name === 'Sao Paulo'){
        dispatch({
          type:FETCH_WEATHER_SP,
          payload:data.main.temp
        });
      }
      //console.log(data.name);
    })
  }
}
export function fetchWeather(idArray){
  var dateNow = new Date();

  // //3435910	Buenos Aires	-34.613152	-58.377232	AR
  // fetchCityWeather('3435910',dateNow);
  //
  // //3871336	Santiago	-33.456940	-70.648270	CL
  // fetchCityWeather('3871336',dateNow);
  //
  // //3936456	Lima	-12.043180	-77.028236	PE
  // fetchCityWeather('3936456',dateNow);
  //
  // //3448439	Sao Paulo	-23.547501	-46.636108	BR
  // fetchCityWeather('3448439',dateNow);

  let urlArray = [] // unknown # of urls (1 or more)
  let promiseArray = [];
  for (let countryId of idArray) {
    urlArray.push(`${WEATHER_URL}&id=${countryId}`);
  }

  promiseArray = urlArray.map(url_by_id => axios.get(url_by_id)); // or whatever

  // for (let x of idArray) {
  //   const url_by_id =  `${WEATHER_URL}&id=${x}`;
  // }

  return (dispatch) => {
    console.log(promiseArray);
    axios.all(promiseArray)
    .then(function(results) {
      let cities = results.map(r => {
        return r.data;
      });

      var array = [];
      for(let data of cities){

        if(data.name === 'Buenos Aires'){
            var obj = {id:2,name:data.name,temp:data.main.temp}
            array.push(obj);
        }else if(data.name === 'Santiago'){

          var obj = {id:1,name:data.name,temp:data.main.temp}
          array.push(obj);

        }else if(data.name === 'Lima'){

          var obj = {id:3,name:data.name,temp:data.main.temp}
          array.push(obj);

        }else if(data.name === 'Sao Paulo'){

          var obj = {id:4,name:data.name,temp:data.main.temp}
          array.push(obj);

        }
      }

      dispatch({
        type:FETCH_WEATHER,
        payload:array
      });

    });

  }

  // const request = axios.get(url_by_id);
  //
  // const url_by_id =  `${WEATHER_URL}&id=${id}`;
  // const request = axios.get(url_by_id);
  //
  // const url_by_id =  `${WEATHER_URL}&id=${id}`;
  // const request = axios.get(url_by_id);
  //
  // const url_by_id =  `${WEATHER_URL}&id=${id}`;
  // const request = axios.get(url_by_id);

}
