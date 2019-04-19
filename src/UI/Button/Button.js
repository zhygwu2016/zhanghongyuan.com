import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
  <button
    className={classes.Button}
    onClick={props.clicked}
    >
    <div className={classes.Hover}>
      {props.children}
    </div>   
  </button>
);

export default button;