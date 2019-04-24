import React from 'react';
import { NavLink } from 'react-router-dom';

import menu from '../../data/menu';

import logoZHY from '../../images/logo-zhanghongyuan.png';

import classes from './NavItem.module.css';

const NavItem = ({className, href, children, logo}) => (
  <li className={`mh2-ns f6 f4-l tc ${className} ${classes.NavItem}`}>
    <NavLink  
      className="white no-underline" 
      to={href}
      activeClassName={classes.active}
    >
      {logo ? <img src={logoZHY} alt="logo-zhanghongyuan" /> : children}
    </NavLink>
  </li>
);

const NavItems = () => (
  <nav className="pt3 pt4-ns mb1 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map(item => <NavItem {...item} key={item.children} />)}
    </ul>
  </nav>
);

export default NavItems;