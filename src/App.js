import React, { Component } from 'react';
import './css/main.css';

import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import Attraction from './container/Attraction/Attraction';

import Aux from './hoc/Aux/Aux';

import attractions from './data/attractions';


class App extends Component {
  render() {
    return (
      <Aux>
        <div className="min-vh-100 ph4 flex flex-column">
          {/* our navigation component */}
          <Nav />
          {/* our intro text component */}
          <Intro />
        </div>

        <div className="flex flex-wrap container">
          {/* our attractions list component */}
          {attractions.map(attraction => <Attraction {...attraction} /> )}
        </div>
      </Aux>
    );
  }
}

export default App;
