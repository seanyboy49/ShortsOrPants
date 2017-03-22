import React from 'react';


import { Segment, Header} from 'semantic-ui-react';

class Branding extends React.Component {
  render() {
    return(
      <div>
        <Segment
          fluid
          padded
          inverted color="blue"
          textAlign="center"
        >
          <Header as="h1">Shorts or Pants!</Header>
        </Segment>

      </div>
    )
  }
}

export default Branding;
