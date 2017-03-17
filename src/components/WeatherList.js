import React from 'react';
import { connect } from 'react-redux';

class WeatherList extends React.Component {
  renderWeather(cityArray) {
    if (cityArray.length===0) {
      return
    }
    else {
      const cityData = cityArray[0];
      const city = cityData.name;
      const humidity = cityData.main.humidity;
      const tempInFarenHeight = cityData.main.temp * 9/5 - 459.67;
      const formattedTemp = Number((tempInFarenHeight).toFixed(2));
      const description = cityData.weather[0].description

      return(
        <div>
          <h1>{city}</h1>
          <p>{humidity} %</p>
          <p>{formattedTemp} F</p>
          <p>{description}</p>
          {formattedTemp > 50 ?
            <div>
              <h2>Wear Jeans!</h2>
              <img src="../img/jeans.png"></img>
            </div>
            :
            <div>
              <h2>Wear Shorts!</h2>
              <img src="../img/shorts.png"></img>
            </div>}
        </div>
      );
    }
  }


  render() {
    return(
      <div>{this.renderWeather(this.props.weather)}</div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather};
}

export default connect(mapStateToProps)(WeatherList);
