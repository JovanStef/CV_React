import React from 'react';
import './menu.css';
import Thumbnails from '../../widgets/Thumbnails/thumbnails';

const MenuMobile = (props)=>{
    let menu = props.data.header.menu
    let colors = props.colorMode()
    const createMenu=(menu)=>{
        return menu.map((item,i)=>{
                return(
                    <a href={`#${item.name}`} key={i}>
                    <Thumbnails  colors={colors} data={item} imgType={'icons'} direction={'right'}/>
                    </a>
                )
            })
    }
    return(
        <div className="menu-mobile">
            {createMenu(menu)}
        </div>
    )
}

const MenuDesktop = (props)=>{
    let menu = props.menu
    const createMenu=(menu)=>{
        return menu.map((item,i)=>{
                return(
                    <a href={`#${item.name}`} key={i}>
                    <div className={`menu-item-${i}`}>
                       <img alt="icon.png" src={`/images/icons/${item.icon}`}/>
                        {item.name}
                    </div>
                    </a>
                )
            })
    }
    return(
        <div className="menu-desktop">
            {createMenu(menu)}
        </div>
    )
}

export {
    MenuMobile,
    MenuDesktop
};