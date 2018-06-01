import React from 'react';
import {bottomNav} from './bottomNav_click'

//consider moving copyright into own div or paragraph////////////

export const BottomNav = (props)=>{

    let bottomNav = props.navItems.map(
      (item, i) => <li key={'item_'+ i}><button className={props.className}>
        <a href={props.navItemsLink[i-1]} target='_blank' id={item} className={'fa fa-'+ item}>{item}</a></button></li>
    );

    return <ul>{bottomNav}</ul> ;
}

BottomNav.defaultProps={
    navItems : ['copyright© Waterflo EngineeringZim 2018', 'facebook', 'linkedin', 'twitter', 'affiliates'],
    navItemsLink:['https://www.facebook.com/Waterfloengineering/','https://zw.linkedin.com/in/blazio-madamba-31a15477',''],
    className: 'w3-button w3-bar-item w3-blue-grey w3-row-padding w3-mobile w3-col w3-panel w3-blue-grey w3-text-orange w3-small w3-topbar w3-hover-border-black'
};

// ReactDOM.render(<BottomNav />, document.getElementById('bottomNav'));
  