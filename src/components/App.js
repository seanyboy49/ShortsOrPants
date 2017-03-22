import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import Branding from './Branding';
import Test from './Test'


class App extends Component {
  render() {
    return (
      <div>
        <Branding/>
        <SearchBar/>
        <WeatherList/>
        <Test/>
      </div>
    );
  }
}

export default App;
