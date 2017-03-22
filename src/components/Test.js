import React from 'react';

require('semantic-ui-react');

const cal = document.createElement('div');
const html = (`
  <div className="ui container">
    <h1>Calandar examples</h1>
    <h3>Input</h3>
    <div className="ui calendar" id="example1">
      <div className="ui input left icon">
        <i className="calendar icon"></i>
        <input type="text" placeholder="Date/Time"></input>
      </div>
    </div>
  </div>
`)

class Test extends React.Component {


  render() {
    return(
      <div>

      </div>
    )
  }
}


export default Test
