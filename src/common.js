const streamLinedJsonOne = {
    defaultTabStyle: {
      color: 'purple',
      highLightColor: 'white',
      onSelectEvent: 'defaultFunction',
    },

    orientation: {
      //choose one and the rest shall be commented
      vertical: {
        // leftTop: 'leftTop',
        //  leftBottom: 'leftBottom',
        //  rightTop: 'rightTop',
        // rightBottom: 'rightBottom'
      },
      horizontal: {
        // leftTop: 'leftTop',
        // leftBottom: 'leftBottom',
        rightTop: 'rightTop',
        // rightBottom: 'rightBottom'
      }
      //ends here
    },

    tabsJson: [

      {
        id: 0,
        title: "MENU",
        iconPath: "./images/icons/1.png",
        onSelectEvent: 'DashBoardComponet',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      }, {
        id: 1,
        title: "DEVICES",
        iconPath: "./images/icons/2.png",
        onSelectEvent: 'DevicesComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      }, {
        id: 2,
        title: "MEDIA",
        iconPath: "./images/icons/3.png",
        onSelectEvent: 'MediaComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }

      }, {
        id: 3,
        title: "APPS",
        iconPath: "./images/icons/4.png",
        onSelectEvent: 'AppsComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      }, {
        id: 4,
        title: "SETTING",
        iconPath: "./images/icons/5.png",
        onSelectEvent: 'SettingsComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      }, {
        id: 5,
        title: "SUPPORT",
        iconPath: "./images/icons/6.png",
        onSelectEvent: 'SupportComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      },
    ]

  }
  const streamLinedJsonTwo = {
    defaultTabStyle: {
      color: 'purple',
      highLightColor: 'white',
      onSelectEvent: 'defaultFunction',
    },

    orientation: {
      //choose one and the rest shall be commented
      vertical: {
        // leftTop: 'leftTop',
         leftBottom: 'leftBottom',
        //  rightTop: 'rightTop',
        // rightBottom: 'rightBottom'
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
        title: "Tyler",
        iconPath: "./images/icons/1.png",
        onSelectEvent: 'DashBoardComponet',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      }, {
        id: 1,
        title: "Jack",
        iconPath: "./images/icons/2.png",
        onSelectEvent: 'DevicesComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      }, {
        id: 2,
        title: "Marla",
        iconPath: "./images/icons/3.png",
        onSelectEvent: 'MediaComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }

      }, {
        id: 3,
        title: "Bob",
        iconPath: "./images/icons/4.png",
        onSelectEvent: 'AppsComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      }, {
        id: 4,
        title: "Rupert",
        iconPath: "./images/icons/5.png",
        onSelectEvent: 'SettingsComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      }, {
        id: 5,
        title: "Mayhem",
        iconPath: "./images/icons/6.png",
        onSelectEvent: 'SupportComponent',
        styles: {
          color: 'white',
          highlightColor: 'darkblue'
        }
      },
    ]

  }

  export  {streamLinedJsonOne , streamLinedJsonTwo};