import React, { Component } from 'react';
import '../css/Tab.css'

class Tab extends Component {

    render() {
        let details = this.props.details;
        let topStyle = {
            display: "inline",
        }
        let listClass = this.props.index === details.id ? 'listItem active' : 'listItem'
        return (

            <div className='individualTab' style={this.props.allignment.top ? topStyle : {}}>
                <a className={listClass} style={this.props.allignment.top ? topStyle : {}}
                    onClick={() => this.props.tabChange(details.id, details.onSelectEvent)}>
                    <img className='icon' src={details.iconPath} alt='icon'></img>
                    <button style={details.styles ? { color: details.styles.color } : {}} className='button'  >{details.title} </button>
                </a>
            </div>
        )
    }
}

export default Tab;