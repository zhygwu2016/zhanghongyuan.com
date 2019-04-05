import React from 'react';
import { NavLink } from 'react-router-dom';

import menu from '../../data/menu';

import logoZHY from '../../images/logo-zhanghongyuan.png';

// the ({className, href, children}) grabs our properties directly
// it means that we don't have to type out props.className, props.href etc
const NavItem = ({className, href, children, logo}) => (
  <li className={`mh2-ns f6 f4-l tc ${className}`}>
    <a className="white no-underline" href={href}>
      {logo ? <img src={logoZHY} alt="logo-zhanghongyuan" /> : children}
      {/* {children}*/}
    </a>
  </li>

  // <NavLink  
  //   className={`mh2-ns f6 f4-l tc ${className} white no-underline`}
  //   to={href}
  // >
  //   {logo ? <img src={logoZHY} alt="logo-zhanghongyuan" /> : children}
  // <NavLink />
);


const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map(item => <NavItem {...item} />)}
    </ul>
  </nav>
);

export default Nav;