import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './PhotoNavItem.module.css';

class PhotoNavItem extends Component {
  render () {
    const isActive = (match, location) => {
      if (location.pathname === "/photos") {
        return this.props.link === "/photos/landscapes"
      } else {
        return this.props.link === location.pathname;
      }
    }
    
    return (
      <li className={classes.PhotoNavItem}>
        <div className="mh2-ns f6 f5-l tc">
          <NavLink 
            to={this.props.link} 
            exact={this.props.exact}
            // className={props.active ? classes.active : null}
            activeClassName={classes.active}
            isActive={isActive}
          >
            {this.props.children}
          </NavLink>
        </div>     
      </li>
    )
  }    
};

export default PhotoNavItem;
