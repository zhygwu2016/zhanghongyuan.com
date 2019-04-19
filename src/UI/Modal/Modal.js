import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  render () {
    //console.log(this.props.marginLeft)
    
    return (
      <Aux>
        <Backdrop show={this.props.modalShowed} clicked={this.props.modalClosed} />
        <div 
          className={`${this.props.ratioType} ${classes.Modal}`}
          //className={`${classes.Portrait} ${classes.Modal}`}

          style={{
            transform: this.props.modalShowed? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.modalShowed? '1' : '0'
            //marginLeft: `${this.props.marginLeft}`
            //marginLeft: '-38vw'
          }}
          >
          {this.props.children}
        </div>
        <div 
          onClick={this.props.modalClosed} 
          className={classes.Close}
          style={{
            transform: this.props.modalShowed? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.modalShowed? '1' : '0'
          }}
          >
          <p>CLOSE</p>
        </div>
      </Aux>
    );
  }
  
}

export default Modal;
