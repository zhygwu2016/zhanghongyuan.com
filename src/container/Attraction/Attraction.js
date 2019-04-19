import React, { Component } from 'react';

import Overlay from './Overlay/Overlay';

class Attraction extends Component {
  state = {
    showInfo: false
  }
  
  toggleInfo = () => {
    this.setState((prevState, props) => ({
      showInfo: !prevState.showInfo
    }));
  }

  openInfo = () => {
    this.setState({
      showInfo: true
    });
  }

  closeInfo = () => {
    this.setState({
      showInfo: false
    });
  }

  render(){
    // const {title, description, className, image} = this.props;
    const {className, image} = this.props;
    // shorthand for: e.g. const title = this.props.title,
 
    return (
      <div
        className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden attraction ${className}`}
        // onClick = {this.toggleInfo}
        //onMouseLeave={this.closeInfo}
      >

        <div className="relative">
          <Overlay 
            {...this.props} {...this.state} 
            closeInfo = {this.closeInfo}
          />

          <div onClick = {this.openInfo}>
            <img src={require(`../../images/${image}`)} alt="" className="db pointer" />
          </div>
        </div>
      </div>
    )
  }
}

export default Attraction;