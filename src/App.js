import React, { Component } from 'react';
import TabContainer from './components/TabContainer';
import {streamLinedJsonOne , streamLinedJsonTwo} from './common.js'

class App extends Component {
  constructor() {
    super()

  }

  render() {
   
    return (
      <div className='mainContainer'>
        <TabContainer json={streamLinedJsonOne} />
        <TabContainer json={streamLinedJsonTwo} />
        <div style={{float:"right", marginBottom:'10%'}}>Dummy</div>



      </div>
    )
  }
}

export default App;
