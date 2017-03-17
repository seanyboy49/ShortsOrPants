import React from 'react';
import { Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      term: ''
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
    console.log(event);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit} >
          <input
            placeholder="Enter a city"
            className="input-group"
            value={this.state.term}
            onChange={this.onInputChange}
          />
            <Button primary>Submit</Button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
