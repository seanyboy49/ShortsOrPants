import React from 'react';

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
