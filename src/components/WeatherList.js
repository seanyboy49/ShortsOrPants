import React from 'react';
import { connect } from 'react-redux';

class WeatherList extends React.Component {
  constructor(props) {
    super(props);

    this.renderWeather=this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    console.log(cityData);

    const city = cityData.name;
    const humidity = cityData.main.humidity;
    const temp = cityData.main.temp;
    const description = cityData.weather[0].description

    return(
      <div>
        <p>{city}</p>
        <p>{humidity}</p>
        <p>{temp}</p>
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
