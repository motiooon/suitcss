import {Component} from 'react';
import ReactDOM from 'react-dom';
import React from 'react'
import SuitCssify from 'react-suitcssify';
import TabsHeader from './tabs-header';
import TabsBody from './tabs-body';
import TabsHash from './tabs-hash';
import Tab from './tab';
import TabPanel from './tab-panel';

// Suit css included as an utility method, decorator are having a issue with babel 6
const getClassName = SuitCssify.utility;

// @SuitCssify.decorator
export default class Tabs extends Component{

  constructor(props){
    super(props);
    this.state = { selectedTabIndex: this.props.selectedTabIndex }
  }

  suit(){
    return {
      componentName: 'Tabs',
      modifiers: 'simple',
      namespace: 'lp'
    }
  }

  onSelect(ix){
    this.setState({selectedTabIndex: ix});
  }

  render() {

    let tabs = [], tabpanels =[];
    let {selectedTabIndex} = this.state;

    this.props.items.forEach((item, ix) => {
      let _ix= ix + 1;
      tabs.push(<Tab text={item.text} key={'tab-' + _ix } ix={_ix } selected={ selectedTabIndex === _ix } onSelect={this.onSelect.bind(this, _ix)}/>);
      tabpanels.push(<TabPanel html={item.html} ix={_ix } key={'tab-panel-' + _ix} selected={ selectedTabIndex === _ix }/>);
    });

    return (
      <div className={ getClassName(this.suit())}>
        <TabsHeader>
          {tabs}
        </TabsHeader>
        <TabsBody>
          {tabpanels}
        </TabsBody>
        <TabsHash selectedTabIndex={this.state.selectedTabIndex}/>
      </div>
    )
  }
}

Tabs.propTypes = {
 items: React.PropTypes.array.isRequired,
 selectedTabIndex : React.PropTypes.number
};

Tabs.defaultProps = { items: [
    {id:1, text:'Tab1', html:'hello1'},
    {id:2, text:'Tab2', html:'hello2'},
    {id:3, text:'Tab3', html:'hello3'},
  ],
  selectedTabIndex: 1
};

