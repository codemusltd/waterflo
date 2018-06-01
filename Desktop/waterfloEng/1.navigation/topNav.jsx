import React from 'react';

export const TopNav = (props)=>{

    let topNav = props.navItems.map((item, i) => <button key={'item_'+ i} className={props.btnClassName}><a href=''>{item}</a></button>);
    
    return <div className= {props.containerClassName}>{topNav}</div> ;
}

TopNav.defaultProps={
    navItems :['home', 'about', 'services', 'products', 'news', 'contact'],
    containerClassName: 'w3-panel ',
    btnClassName:'w3-bar-item w3-black w3-button w3-border-dark-grey w3-topbar w3-hover-border-black'
};

//ReactDOM.render(<TopNav />, document.getElementById('topNav'));