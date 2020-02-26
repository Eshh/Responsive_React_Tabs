import React, { Component } from 'react';
import  TabContainer  from './components/TabContainer';
import {tabsJson} from './common'

class App extends Component {
  render() {
    return (
      <div className = 'mainContainer'>
      <TabContainer json = {tabsJson}/>
      </div>
    )
  }
}

export default App;
