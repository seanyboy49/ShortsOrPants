import React, { Component } from 'react';

import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

export default App;
