import React from 'react';
import './misc.css';
import Thumbnails from '../widgets/Thumbnails/thumbnails';

const Misc=(props)=> {
    let weather = {
        name:props.data.misc.weather,
        icon:'sunny.png'
    }
    let unitConverter = {
        name:props.data.misc.unit,
        icon:'unit-converter.png'
    }

    let showWeather=()=>{
        document.querySelector('.screen-weather').style.display = 'flex';
        props.handler(props.data.background)
    }
     let showUnit =()=>{
        
            document.querySelector('.screen-conv').style.display='flex'
        
     }

    return (
        <div className="misc-container">
            <div onClick={()=>showWeather()} ><Thumbnails  colors={props.colorMode()} data={weather} imgType={'icons'} direction={'right'}/></div>
            <div onClick={()=>showUnit()}><Thumbnails  colors={props.colorMode()} data={unitConverter} imgType={'icons'} direction={'right'}/></div>
        </div>
    )
}

export default Misc;