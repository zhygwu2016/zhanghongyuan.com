import React from 'react';

import Highlight from './Highlight/Highlight';

const intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
      Hey! I'm <Highlight type="aqua">Hongyuan Zhang</Highlight>, 
      a <Highlight type="blue">photographer</Highlight>, 
      and a <Highlight type="pink">front-end developer</Highlight>{' '} 
      in <Highlight type="yellow">Seattle</Highlight>.
    </div>
    <div>
      From <Highlight type="blue">landscapes</Highlight> to{' '} 
      <Highlight type="yellow">architecture</Highlight>,{' '}  
      <Highlight type="pink">street</Highlight> snapshot to{' '}  
      <Highlight type="yellow">long-exposure</Highlight> cityscapes, 
      or even <Highlight type="blue">iPhone</Highlight>{' '} 
      photography... 
      You can find various kinds of <Highlight type="pink">photographs</Highlight> here!
    </div>
  </div>
);

export default intro;