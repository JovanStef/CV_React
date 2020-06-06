import React from 'react';
import './header.css';

//COMPONENTS
import {MenuDesktop} from './Menu/menu';
import {toggleMenu } from '../../helpers';

const Header =(props)=>{
    let data = props.data
    let color = props.colorMode();

    // const toggleMenu=()=>{
    //     let langMenu =  document.querySelector('.lang-menu-wrapper');
    //     let mobileMenu = document.querySelector('.menu-mobile');
    //     let miscMenu = document.querySelector('.misc-container');
    //     let bool = langMenu.style.display === 'flex'?'none':'flex'
    //    langMenu.style.display=bool
    //    mobileMenu.style.display=bool
    //    miscMenu.style.display=bool

    // }


    return(
        <div className="header-container">
            <div className="img-container" style={{background:`url("images/photos/${data.header.image}")`,borderColor:color.light}}/>
            <div className="name-container" style={{background:color.light}}>
            <p>{data.author.name}</p>
            </div>

            <div className="ham-menu" onClick={()=>{toggleMenu()}} style={{background:"white", borderColor:color.dark}}>
                <img alt="menu-icon.png" src={"images/icons/menu-icon.png"}/>
            </div>
            <div className="header-menu-container"  style={{background:color.dark, color:color.light}}>
            <p>{data.author.surname.toUpperCase()}</p>
                <MenuDesktop menu={data.header.menu}/>
            </div>
        </div>
    )
}

export default Header;