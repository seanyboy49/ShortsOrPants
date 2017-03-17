import React from 'react';
import { connect } from 'react-redux';

class WeatherList extends React.Component {

  renderWeather(cityData) {

    const city = cityData.name;
    const humidity = cityData.main.humidity;
    const tempInFarenHeight = cityData.main.temp * 9/5 - 459.67;
    const formattedTemp = Number((tempInFarenHeight).toFixed(2));
    const description = cityData.weather[0].description

    return(
      <div>
        <h1>{city}</h1>
        <p>{humidity}</p>
        <p>{formattedTemp} F</p>
        <p>{description}</p>
      </div>
    )

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
