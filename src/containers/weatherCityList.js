import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import {fetchWeather} from '../actions/index';

var count = 0;

class WeatherCityList extends Component{

  constructor(){
    super();
    //this.renderCityList = this.renderCityList.bind(this);
  }

  weatherLoad(){

    // setInterval(function () {
    //   this.setState({
    //     ticks: this.state.ticks + 1
    //   });
    //   localStorage.setItem('ticker', JSON.stringify(this.state));
    // }, 1000);

    // //3435910	Buenos Aires	-34.613152	-58.377232	AR
    // this.props.fetchWeather('3435910');
    //
    // //3871336	Santiago	-33.456940	-70.648270	CL
    // this.props.fetchWeather('3871336');
    //
    // //3936456	Lima	-12.043180	-77.028236	PE
    // this.props.fetchWeather('3936456');
    //
    // //3448439	Sao Paulo	-23.547501	-46.636108	BR
    // this.props.fetchWeather('3448439');

    this.props.fetchWeather([3435910,3871336,3936456,3448439]);
  }
  componentWillMount(){
    this.weatherLoad();
  }

  renderCity(city){
    console.log('city:',city);
    return (
      <tr key={city.id}>
        <td>{city.name}</td>
        <td>{city.temp}</td>
      </tr>
    );
  }
  renderCityList(){
    console.log('list:',this.props.weatherState);
    let myObjects = _.sortBy(this.props.weatherState, 'id');
    console.log('sorted:',myObjects);
    return myObjects.map(this.renderCity);
  }

  render(){
    console.log('reder:',count++);
    return(
      <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCityList()}
        </tbody>
      </table>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}

function mapStateToProps(state){
  return {weatherState:state.weatherState};
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherCityList);
