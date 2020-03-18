import React, { Component } from 'react';
import '../css/Tab.css'
import { thistle } from 'color-name';

class Tab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        this.toggleHover = this.toggleHover.bind(this)
    }
    toggleHover = function () {
        this.setState({ hover: !this.state.hover })
    }

    render() {
        let details = this.props.details;
        let topStyle = {

        }
        var linkStyle;

        if (this.state.hover) {
            linkStyle = details.styles.highlightColor
        } else {
            linkStyle = ""
        }
        let listClass = this.props.index === details.id ? 'listItem active' : 'listItem'
        let rightClass = this.props.index === details.id ? 'rightClass active' : 'rightClass';
        let onSelectEvent = details.onSelectEvent ? details.onSelectEvent : this.props.defaultStyle.onSelectEvent;

        return (
            <div className='individualTab' style={this.props.allignment.top ? topStyle : {}}>
                <a className={this.props.allignment.right ? rightClass : listClass}
                    style={this.props.allignment.top ? { display: "inline", backgroundColor: linkStyle } : { backgroundColor: linkStyle }}
                    onClick={() => this.props.tabChange(details.id, onSelectEvent)}>
                    <img  onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style= {{backgroundColor: linkStyle}}className='icon' src={details.iconPath} alt='icon'></img>
                    <button
                        onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
                        style={details.styles ? { color: details.styles.color } : this.props.defaultStyle}
                        className='button'  >{details.title}
                    </button>
                </a>
            </div>
        )
    }
}

export default Tab;