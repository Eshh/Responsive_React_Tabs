import React, { Component } from 'react';
import TabContainer from './components/TabContainer';

class App extends Component {
  constructor() {
    super()

  }

  render() {
    const streamLinedJson = {
      defaultTabStyle: {
        color: 'purple',
        highLightColor: 'white',
        onSelectEvent: 'defaultFunction',
      },

      orientation: {
        //choose one and the rest shall be commented
        vertical: {
          leftTop: 'leftTop',
          // leftBottom: 'leftBottom',
          // rightTop: 'rightTop',
          //rightBottom: 'rightBottom'
        },
        horizontal: {
          // leftTop: 'leftTop',
          // leftBottom: 'leftBottom',
          // rightTop: 'rightTop',
          // rightBottom: 'rightBottom'
        }
        //ends here
      },

      tabsJson: [

        {
          id: 0,
          title: "DASHBOARD",
          iconPath: "/images/icons/1.png",
          onSelectEvent: 'DashBoardComponet',
          styles: {
            color: 'white',
            highlightColor: 'green'
          }
        }, {
          id: 1,
          title: "DEVICES",
          iconPath: "/images/icons/2.png",
          onSelectEvent: 'DevicesComponent',
          styles: {
            color: 'white',
            highlightColor: 'red'
          }
        }, {
          id: 2,
          title: "MEDIA",
          iconPath: "/images/icons/3.png",
          onSelectEvent: 'MediaComponent',
          styles: {
            color: 'white',
            highlightColor: 'purple'
          }

        }, {
          id: 3,
          title: "APPS",
          iconPath: "/images/icons/4.png",
          onSelectEvent: 'AppsComponent',
          styles: {
            color: 'white',
            highlightColor: 'yellow'
          }
        }, {
          id: 4,
          title: "SETTINGS",
          iconPath: "/images/icons/5.png",
          onSelectEvent: 'SettingsComponent',
          styles: {
            color: 'white',
            highlightColor: 'orange'
          }
        }, {
          id: 5,
          title: "SUPPORT",
          iconPath: "/images/icons/6.png",
          onSelectEvent: 'SupportComponent',
          styles: {
            color: 'white',
            highlightColor: 'blue'
          }
        },]

    }
    return (
      <div className='mainContainer'>
        <TabContainer json={streamLinedJson} />
      </div>
    )
  }
}

export default App;
