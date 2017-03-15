import React from 'react';

import axios from 'axios';

const API_KEY = 'd04457c03f3b4f931f90cfe2fdde3919';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


class SearchBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange=this.onInputChange.bind(this);

  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }

  render() {
    return(
      <div>
        <form className="input-group">
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
