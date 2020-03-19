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
        console.log(actionFunction)
    }
    render() {
        let styles = [{
            top: true,
            bottom: false,
            right: false,
        }]
        let tabsJson = this.props.json.tabsJson;
        let orientation = this.props.json.orientation;
        
        if (orientation.vertical.leftTop) {
            styles[0].top = false;
            styles[0].bottom = false;
            styles[0].right = false;
        } else if (orientation.vertical.leftBottom) {
            styles[0].top = false;
            styles[0].bottom = true;
            styles[0].right = false;
        } else if (orientation.vertical.rightTop) {
            styles[0].top = false;
            styles[0].bottom = false;
            styles[0].right = true;
        } else if (orientation.vertical.rightBottom) {
            styles[0].top = false;
            styles[0].bottom = true;
            styles[0].right = true;
        } else if (orientation.horizontal.leftTop) {
            styles[0].top = true;
            styles[0].bottom = false;
            styles[0].right = false;
        } else if (orientation.horizontal.leftBottom) {
            styles[0].top = true;
            styles[0].bottom = true;
            styles[0].right = false;
        } else if (orientation.horizontal.rightTop) {
            styles[0].top = true;
            styles[0].bottom = false;
            styles[0].right = true;
        } else if (orientation.horizontal.rightBottom) {
            styles[0].top = true;
            styles[0].bottom = true;
            styles[0].right = true;
        }
        return (
            <div className='tabSection' style={styles[0].bottom && styles[0].top ? { marginTop: '100%' } :
                styles[0].bottom && !styles[0].top ? { marginTop: '0%' } : {}}>
                {tabsJson.map((tab, i) => {
                    return <Tab key={tab.id} details={tab} tabChange={this.tabChange} index={this.state.selectedTab} allignment={styles[0]} defaultStyle={this.props.json.defaultTabStyle} />
                })}
            </div>
        )
    }
}
export default TabContainer;
