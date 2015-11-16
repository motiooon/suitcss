import {Component} from 'react';
import ReactDOM from 'react-dom';
import React from 'react'
import SuitCssify from 'react-suitcssify';

// Suit css included as an utility method, decorator are having a issue with babel 6
const getClassName = SuitCssify.utility;

// @SuitCssify.decorator
export default class TabPanel extends Component{

  constructor(props){
    super(props);
  }

  suit(props){
    return {
      componentName: 'TabPanel',
      namespace: 'lp-Tabs',
      states: props.selected ? 'selected' : null
    }
  }

  render() {

    return (
      <li className={ getClassName(this.suit(this.props))}>{this.props.html}</li>
    )
  }
}

TabPanel.propTypes = {
 html: React.PropTypes.string.isRequired,
 selected: React.PropTypes.bool
};

TabPanel.defaultProps = { text: 'tab'};



