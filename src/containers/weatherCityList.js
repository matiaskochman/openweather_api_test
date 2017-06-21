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

  timer(){
    this.props.fetchWeather([3435910,3871336,3936456,3448439]);

  }
  weatherLoad(){

    // setInterval(function () {
    //   this.setState({
    //     ticks: this.state.ticks + 1
    //   });
    //   localStorage.setItem('ticker', JSON.stringify(this.state));
    // }, 1000);

    // //3435910	Buenos Aires	-34.613152	-58.377232	AR
    // //3871336	Santiago	-33.456940	-70.648270	CL
    // //3936456	Lima	-12.043180	-77.028236	PE
    // //3448439	Sao Paulo	-23.547501	-46.636108	BR

    setInterval(this.timer.bind(this),3000);
  }
  componentWillMount(){
    this.weatherLoad();
  }

  renderCity(city,keyVal){
    var key = city.id + count;
    return (
      <tr key={keyVal}>
        <td>{city.name}</td>
        <td>{city.temp}</td>
      </tr>
    );
  }
  renderCityList(){
    let myObjects = _.sortBy(this.props.weatherState, 'id');
    return myObjects.map(this.renderCity);
    // return myObjects.map(function(value,index){
    //   console.log('val:',value);
    //   console.log('index:',index);
    //
    //   this.renderCity(value,index);
    // });

  }

  render(){
    count++;
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
