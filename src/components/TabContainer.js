import React, { Component } from 'react';
import Tab from './Tab';

class TabContainer extends Component {
    constructor(props) {
        super(props);
        let selectedTab = 0;
        this.state = {
            selectedTab: selectedTab
        }
        this.tabChange = this.tabChange.bind(this);

    }

    tabChange = (t, actionFunction) => {
        this.setState({
            selectedTab: t
        })
        console.log(actionFunction)
    }
    render() {
        return (
            <div className='tabSection'>
                {this.props.json.map((tab, i) => {
                    return <Tab key={tab.id} details={tab} tabChange={this.tabChange} index={this.state.selectedTab} allignment={this.props.allignmentStyle[0]} />
                })}
            </div>
        )
    }
}
export default TabContainer;
