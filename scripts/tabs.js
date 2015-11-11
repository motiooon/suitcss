import React, {Component} from 'react';
import SuitCssify from 'react-suitcssify';

// Suit css included as an utility method, decorator are having a issue with babel 6
const getClassName = SuitCssify.utility;

export default class Tabs extends Component{

  constructor(props){
    super(props);
  }

  suit(){
    return {
      className: 'arbitrary',
      componentName: 'Tabs',
      modifiers: 'foo bar',
      namespace: 'my',
      states: 'active',
      utilities: 'clearFix'
    }
  }

  render() {
    return (
      <div className={ getClassName(this.suit())}>

      </div>
    )
  }
}

