import React from 'react';
import './badges.css';  

const Badges = (props) => {
    let path = props.path
    let icon = props.data.icon
    let name = props.data.name.toUpperCase()
    let colors = props.colors
    return (
        <div className={"badge-wrapper"} style={{borderColor:colors.dark}}>
            <img alt={`${icon}`} src={`images/logos/${path}/${icon}`}/>
            <div style={{background:colors.dark , color:colors.light}}>{name}</div>
        </div>
    )
}

export default Badges
