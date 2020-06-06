import React from 'react';
import './contentPanel.css';
import Badges from '../../components/widgets/Badges/badges';


const ContentPanel = ({colors , headers ,badges,content}) => {
    let bckg = colors.icon !=='moon-light.png'?'black':'white';
    let forg = colors.icon ==='moon-light.png'?'black':'white';
    
    const createBadges=({type,path})=>{
            if(type !== undefined){
                return type.map((elem,i)=>{
                    return <Badges key={i} data={elem} path={path} colors={colors}/>
                })
            }
    }
    return (
        <div className={"content-panel"} style={{background:bckg , color:forg}} >
            <div className={"panel-header"} style={{background:colors.dark , color:colors.light}} id={headers.name}>{headers.name}</div>
            <div className={"panel-logo"}><img alt="panel-logo" src={`images/icons/${headers.icon}`}/></div>
            {createBadges(badges)}
    <div className={"content-text"} style={{borderColor:colors.light, color:forg}}>{content} </div>
        </div>
    )
}

export default ContentPanel
