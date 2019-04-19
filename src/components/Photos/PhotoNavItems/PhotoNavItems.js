import React, { Component } from 'react';
import classes from './PhotoNavItems.module.css';
import PhotoNavItem from './PhotoNavItem/PhotoNavItem';

class PhotoNavItems extends Component {

  render () {
    const pathName = window.location.pathname;
    console.log(pathName);
    
    return (
      <ul className={classes.PhotoNavItems}>
        <PhotoNavItem 
          exact 
          link="/photos/landscapes" 
          >Landscapes</PhotoNavItem> 
        <PhotoNavItem link="/photos/architecture">Architecture</PhotoNavItem>
        <PhotoNavItem link="/photos/street">Street</PhotoNavItem>
        <PhotoNavItem link="/photos/iphone">iPhone</PhotoNavItem>
        <PhotoNavItem link="/photos/film">Film</PhotoNavItem>
      </ul>
    );
  }
}

export default PhotoNavItems;