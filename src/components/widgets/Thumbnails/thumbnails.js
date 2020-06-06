import React from 'react';
import './thumbnails.css';
import {toggleMenu} from '../../../helpers';

function Thumbnails({colors , data , direction , imgType}) {
    
    let cssClass = direction==='left'?'thumb-left':'thumb-right'
    let template=null;
    switch(direction){
        case('left'):
        template=(<div onClick={()=>toggleMenu()} className={cssClass} style={{background:colors.dark , borderColor:colors.light , color:colors.light}}>
            <span>{data.name}</span><img  style={{borderColor:colors.light}} alt={`${data.name}`} src={`images/${imgType}/${data.icon}`}/>
        </div>)
        break;
        case('right'):
        template=(<div onClick={()=>toggleMenu()} className={cssClass} style={{background:colors.dark , borderColor:colors.light , color:colors.light}}>
            <img  style={{borderColor:colors.light}} alt={`${data.name}`} src={`images/${imgType}/${data.icon}`}/><span>{data.name}</span>
        </div>)
        break;
        default:
            template=null
    }

    return (
        <div>
           {template}
        </div>
    )
}

export default Thumbnails;