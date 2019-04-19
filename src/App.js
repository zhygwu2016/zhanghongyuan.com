import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/main.css';

import NavItems from './components/NavItems/NavItems';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Photos from './components/Photos/Photos';
import Book from './components/Book/Book';
import Contact from './components/Contact/Contact';


import Aux from './hoc/Aux/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
        <div className="min-vh-100 ph4 flex flex-column">
          {/* navigation component */}
          <NavItems />

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/photos" component={Photos} />
            <Route path="/" exact component={Intro} />
            <Route path="/book" component={Book} />
            <Route path="/contact" component={Contact} />           
            <Redirect to="/" />
          </Switch>
        </div>

      </Aux>
    );
  }
}

export default App;
