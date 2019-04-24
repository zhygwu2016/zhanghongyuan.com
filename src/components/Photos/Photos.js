import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';

import PhotoNavItems from './PhotoNavItems/PhotoNavItems';

import Landscapes from './PhotoComponents/Landscapes/Landscapes';
import Architecture from './PhotoComponents/Architecture/Architecture';
import Street from './PhotoComponents/Street/Street';
import iPhone from './PhotoComponents/iPhone/iPhone';
import Film from './PhotoComponents/Film/Film';

// import Attraction from '../../container/Attraction/Attraction';
// import attractions from '../../data/attractions';

const photos = () => {
  return (
    <Aux>
      <div className="mb2-ns mb4">
        <PhotoNavItems />
        <Switch>
          <Route path="/photos/landscapes" component={Landscapes} />
          <Route path="/photos/architecture" component={Architecture} />
          <Route path="/photos/street" component={Street} />
          <Route path="/photos/iphone" component={iPhone} />
          <Route path="/photos/film" component={Film} />
          <Route exact path="/photos" component={Landscapes} />           
          <Redirect to="/photos" />
        </Switch>
      </div>
      
      {/* <div className="mt2 flex flex-wrap container">
        {attractions.map(attraction => <Attraction {...attraction} /> )}
      </div> */}
    </Aux>
  );
};

export default photos;