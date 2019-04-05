import React, { Component } from 'react';

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

class Attraction extends Component {
  state = {
    showInfo: false
  }
  
  toggleInfo = () => {
    this.setState((prevState, props) => ({
      showInfo: !prevState.showInfo
    }));
  }

  closeInfo = () => {
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
          {/* <img src={`images/${image}`} className="db" /> */}
          {/* <img src={`../images/${image}`} className="db" /> */}
          {/* <img src={require('../images/image_1.jpg')} className="db" /> */}
          <img src={require(`../../images/${image}`)} className="db" />
        </div>
      </div>
    )
  }
}

export default Attraction;