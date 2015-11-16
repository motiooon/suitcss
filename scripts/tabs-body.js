import {Component} from 'react';
import ReactDOM from 'react-dom';
import React from 'react'
import SuitCssify from 'react-suitcssify';


// Suit css included as an utility method, decorator are having a issue with babel 6
const getClassName = SuitCssify.utility;

// @SuitCssify.decorator
export default class TabsBody extends Component{

  constructor(props){
    super(props);
  }

  suit(){
    return {
      componentName: 'TabsBody',
      namespace: 'lp'
    }
  }

  render() {
    return (
      <ul className={ getClassName(this.suit())}>{this.props.children}</ul>
    )
  }
}




