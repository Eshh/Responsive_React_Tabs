import React, { Component } from 'react';
import TabContainer from './components/TabContainer';
import { tabsJson, allignmentStyle } from './common'

class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <TabContainer json={tabsJson} allignmentStyle={allignmentStyle} />
      </div>
    )
  }
}

export default App;
