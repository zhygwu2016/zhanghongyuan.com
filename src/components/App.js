import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../css/main.css';

import menu from '../data/menu';
import attractions from '../data/attractions';

const Highlight = ({children, type}) => (
  <span className={`relative highlight highlight-${type}`}>
    <span className="relative z-2">{children}</span>
  </span>
);

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
      Hey! I'm <Highlight type="aqua">Hongyuan Zhang</Highlight>, 
      a <Highlight type="blue">photographer</Highlight>, 
      and a <Highlight type="pink">front-end developer</Highlight>{' '} 
      in <Highlight type="yellow">Seattle</Highlight>.
    </div>
    <div>
      From <Highlight type="blue">landscapes</Highlight> to{' '} 
      <Highlight type="aqua">architecture</Highlight>,{' '}  
      <Highlight type="pink">street</Highlight> snapshot to{' '}  
      <Highlight type="yellow">long-exposure</Highlight> cityscapes, 
      or even <Highlight type="blue">iPhone</Highlight>{' '} 
      photography... 
      You can find various kinds of <Highlight type="pink">photographs</Highlight> here!
    </div>
  </div>
);


// the ({className, href, children}) grabs our properties directly
// it means that we don't have to type out props.className, props.href etc
const NavItem = ({className, href, children, logo}) => (
  <li className={`mh2-ns f6 f4-l tc ${className}`}>
    <a className="white no-underline" href={href}>
      {/* here we check for the logo prop, if we have it we render out our logo
      otherwise we just render out our regular navigation text(children prop)*/}
      {logo ? <img src="images/logo-zhanghongyuan.png" /> : children}
      {/* {children}*/}
    </a>
  </li>
);


const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map(item => <NavItem {...item} />)}
    </ul>
  </nav>
);

const Overlay = ({showInfo, title, description}) => (
  <div
    className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
    style = {{
      // we do a test to see whether our showInfo state is true
      // if it is, we change the transform to be none, otherwise -100%
      transform: showInfo? 'none' : 'translateY(-100%)'
    }}
  >
    <div>
      <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
      <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
    </div>
  </div>
)

// we can also create components as classes
// these gives us more advanced functionally and features such as the
// component lifecycle as well as React's in-built this.state.
class Attraction extends Component {
  constructor(props){
    super(props);
    this.state = {
      showInfo: false
    }
    // set up our methods
    // here we tell our toggleInfo about 'this'
    // otherwise things like setState will not work
    this.toggleInfo = this.toggleInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  // this is our own method
  toggleInfo(){
    this.setState((prevState, props) => ({
      // here we invert our showInfo boolean by using the previous state and
      // the ! exclamation mark
      showInfo: !prevState.showInfo
    }));
  }

  closeInfo() {
    // here we use setState the usual way because we don;t need access to the previous state,
    // we're just force setting the showInfo to be false
    this.setState({
      showInfo: false
    });
  }

  render(){
    const {title, description, className, image} = this.props;
    // shorthand for:
    // const title = this.props.title,
    // const description = this.props.description
    // etc
    const {showInfo} = this.state;
    return (
      <div
        className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer
        attraction ${className}`}
        onClick = {this.toggleInfo}
        onMouseLeave={this.closeInfo}
      >

        <div className="relative">
          {/* here we remember to pass along all of our props and state */}
          <Overlay {...this.props} {...this.state} />
          <img src={`images/${image}`} className="db" />
        </div>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <div className="min-vh-100 ph4 flex flex-column">
          {/* our navigation component */}
          <Nav />
          {/* our intro text component */}
          <Intro />
        </div>
        <div className="flex flex-wrap container">
          {/* our attractions list component */}
          {attractions.map(attraction => <Attraction {...attraction} /> )}
        </div>
      </div>
    );
  }
}


export default App;
