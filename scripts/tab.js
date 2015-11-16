import {Component} from 'react';
import ReactDOM from 'react-dom';
import React from 'react'
import SuitCssify from 'react-suitcssify';

// Suit css included as an utility method, decorator are having a issue with babel 6
const getClassName = SuitCssify.utility;

// @SuitCssify.decorator
export default class Tab extends Component{

  constructor(props){
    super(props);
  }

  suit(props){
    return {
      componentName: 'Tab',
      namespace: 'lp-Tabs',
      states: props.selected ? 'selected' : null
    }
  }

  render() {
    return (
      <li className={ getClassName(this.suit(this.props))} id={ 'lp-Tab-' + this.props.ix } onClick={this.props.onSelect.bind(this)}>{this.props.text}</li>
    )
  }
}

Tab.propTypes = {
 text: React.PropTypes.string.isRequired,
 selected: React.PropTypes.bool,
 ix: React.PropTypes.number,
 onSelect: React.PropTypes.func
};








