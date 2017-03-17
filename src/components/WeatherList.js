import React from 'react';
import { connect } from 'react-redux';

class WeatherList extends React.Component {
  constructor(props) {
    super(props);

    this.renderWeather=this.renderWeather.bind(this);
    console.log('this.props.weather', this.props.weather);
  }

  renderWeather(cityData) {
    console.log(cityData);
    console.log(cityData.name);
    // const weather = this.props.weather[0];
    // console.log(weather);
    // console.log(weather.main);
    // const weather = this.props.weather[0].weather;


  }


  render() {
    return(
      <div>{this.props.weather.map(this.renderWeather)}</div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather};
}

export default connect(mapStateToProps)(WeatherList);
