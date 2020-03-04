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
    // executed when onClick of tab button in Tab component
    tabChange = (t, actionFunction) => {
        this.setState({
            selectedTab: t
        })
    }
    render() {
        let styles = this.props.allignmentStyle;
        return (
            <div className='tabSection' style={styles[0].bottom && styles[0].top ? { marginTop: '40%' } :
                styles[0].bottom && !styles[0].top ? { marginTop: '16%' } : {}}>

                {this.props.json.map((tab, i) => {
                    return <Tab key={tab.id} details={tab} tabChange={this.tabChange} index={this.state.selectedTab} allignment={this.props.allignmentStyle[0]} />
                })}
            </div>
        )
    }
}
export default TabContainer;
