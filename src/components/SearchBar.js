import React from 'react';
import { Input, Button } from 'semantic-ui-react';

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
    this.props.fetchWeather(this.state.term); {/* Accesses the fetchWeather method inside props  */}
    this.setState({ term: ''}); {/* Resets the search bar   */}
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit} >
          <Input
            action="Search"
            placeholder="Enter a city"
            size="massive"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          {/* <Button primary>Submit</Button> */}
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
