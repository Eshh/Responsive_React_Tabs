//set this to true/false to alternatively shift tabs from/to left/right/bottom
// side Tabs ( TOP ) --- both top and bottom false .. side Tabs ( BOTTOM ) --- top false bottom true
// top tabs --- top true and bottom false
// bottom tabs --- both top and bottom true
//right ---  true/false coz by default tabs are rendered to the left of the screen use to to move right
const allignmentStyle = [{
    top: false,
    bottom: false,
    right: false,

}]

const tabsJson = [

    {
        id: 0,
        title: "DASHBOARD",
        iconPath: "/images/icons/1.png",
        onSelectEvent: 'DashBoardComponet',
        styles: {
            color: 'white',
            highlightColor: 'purple'
        }
    }, {
        id: 1,
        title: "DEVICES",
        iconPath: "/images/icons/2.png",
        onSelectEvent: 'DevicesComponent',
        styles: {
            color: 'white',
            highlightColor: 'purple'
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
            highlightColor: 'purple'
        }
    }, {
        id: 4,
        title: "SETTINGS",
        iconPath: "/images/icons/5.png",
        onSelectEvent: 'SettingsComponent',
        styles: {
            color: 'white',
            highlightColor: 'purple'
        }
    }, {
        id: 5,
        title: "SUPPORT",
        iconPath: "/images/icons/6.png",
        onSelectEvent: 'SupportComponent',
        styles: {
            color: 'white',
            highlightColor: 'purple'
        }
    },];

export { allignmentStyle, tabsJson }