import React, { Component } from 'react';
import Tab from './Tab';
import '../css/TabContainer.css';

class TabContainer extends Component {
   render() {
        return (                    
             <div className = 'tabSection'>
                {this.props.json.map((tab, i) => {
                    return <Tab key = {tab.id} details = {tab} />
                })}
            </div>
        )
    }
}

export default TabContainer;
