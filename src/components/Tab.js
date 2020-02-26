import React, { Component } from 'react';
import '../css/Tab.css'

class Tab extends Component {
    constructor(props){
        super(props);
        let selectedTab = 0;
        this.state = {
            selectedTab : selectedTab
        }
        this.tabChange = this.tabChange.bind(this);

    }

    tabChange = (t) =>{
        this.setState({
            selectedTab : t
        })

    }
    ren
    render() {
        let details = this.props.details;
        return (
            <div className = 'individualTab'>
            <ul>
                <li className = 'listItem' > 
                    <p>{this.state.selectedTab}</p>
                    <button className = 'button' onClick = {() => this.tabChange(details.id)}>{details.title}</button>
                </li>
            </ul>
            </div>
        )
    }
}

export default Tab;