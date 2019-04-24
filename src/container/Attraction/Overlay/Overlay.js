import React, { Component } from 'react';

import Modal from '../../../UI/Modal/Modal';
import Button from '../../../UI/Button/Button';

class Overlay extends Component {

  state = {
    ...this.state
  }

  showFullSizeHandler = () => {
    this.setState({showFullSize: true});
  }

  closeFullSizeHandler = () => {
    this.setState({showFullSize: false});
  }

  render () {

    const {showInfo, title, description, note, note2, image, ratioType} = this.props;
    //console.log(className2);

    return (
      <div
        className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
        style = {{
          // we do a test to see whether our showInfo state is true
          // if it is, we change the transform to be none, otherwise -100%
          transform: showInfo? 'none' : 'translateY(-100%)'
        }}
      >

        <Modal 
          modalShowed={this.state.showFullSize}
          modalClosed={this.closeFullSizeHandler}
          //onMouseLeave={this.closeFullSizeHandler}
          // style={{
          //   marginLeft: '-38vw'
          // }}
          ratioType={ratioType}
          >
          <img src={require(`../../../images/${image}`)} alt="" />
        </Modal> 

        <div>
          <h1 className="f6 f4-ns b mt0 mb2 regular black normal lh-title">{title}</h1>
          <p className="lh-title lh-copy-ns mt0 mb1 mb2-ns black f7 f6-ns measure-l">{description}</p>
          <p className="lh-title lh-copy-ns mv0 mb1 black f7 f6-ns measure-l">{note}</p>
          <p className="lh-title lh-copy-ns mv0 black f7 f6-ns measure-l">{note2}</p>
          {/* <img src={require(`../../../images/${image}`)} alt="" className="db" /> */}
          <div className="flex justify-between f7 f6-ns mt0 mt2-ns mr3">
            <Button clicked={this.showFullSizeHandler}>FULL SIZE</Button>
            <Button clicked={this.props.closeInfo}>X</Button>
          </div>
        </div>
      </div>
    );
  }
}

// const Overlay = ({showInfo, title, description,image}) => (
//   <div
//     className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
//     style = {{
//       // we do a test to see whether our showInfo state is true
//       // if it is, we change the transform to be none, otherwise -100%
//       transform: showInfo? 'none' : 'translateY(-100%)'
//     }}
//   >
//     <Modal 
//       show={this.props.show}
//       modalClosed={this.props.closed}
//       >
//       <img src={require(`../../../images/${image}`)} alt="" className="db" />
//     </Modal> 

//     <div>
//       <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
//       <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
//       {/* <img src={require(`../../../images/${image}`)} alt="" className="db" /> */}
//       <button onClick={this.props.show}>FULL SIZE</button>
//     </div>
//   </div>
// )

export default Overlay;