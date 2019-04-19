import React from 'react';

import Attraction from '../../../../container/Attraction/Attraction';
import attractions from '../../../../data/attractions_landscapes';

const landscapes = () => {
  return (
    <div className="mt2 flex flex-wrap container">
      {/* our attractions list component */}
      {attractions.map(attraction => <Attraction {...attraction} key={attraction.title} /> )}
    </div>
  );
};

export default landscapes;