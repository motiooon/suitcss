import {Component} from 'react';
import ReactDOM from 'react-dom';
import React from 'react'

export default class TabsHash extends Component{

  constructor(props){
    super(props);
  }

  render() {
    return ( null )
  }
}

TabsHash.propTypes = {
 selectedTab: React.PropTypes.number.isRequired
};

TabsHash.defaultProps = { selectedTab: 1};
