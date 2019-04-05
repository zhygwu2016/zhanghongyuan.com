import React from 'react';

const highlight = ({children, type}) => (
  <span className={`relative highlight highlight-${type}`}>
    <span className="relative z-2">{children}</span>
  </span>
);

export default highlight;