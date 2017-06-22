import React, { Component } from 'react';
import WeatherCityList from '../containers/weatherCityList';

export default class App extends Component {

  renderJumbotron(){
    return (
      <div class="jumbotron">
        <h1 class="text-center">Weather App</h1>
      </div>

    );
  }

  render() {
    return (
      <div>
        {this.renderJumbotron()}
        <WeatherCityList/>
      </div>
    )
  }
}
