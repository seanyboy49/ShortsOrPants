import React from 'react';

import axios from 'axios';

const API_KEY = 'd04457c03f3b4f931f90cfe2fdde3919';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;


class SearchBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      city: '',
      humidity: '',
      temp: ''
    };

    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    const term = this.state.term
    const url = `${ROOT_URL}&q=${term},us`;
    const request = axios.get(url);
    request.then(function(response) {
      weatherArray = {...response}
    })
    console.log(weatherArray);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Enter a city"
            className="input-group"
            value={this.state.term}
            onChange={this.onInputChange}
          />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
