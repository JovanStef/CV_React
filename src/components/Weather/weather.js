import React from 'react'
import './weather.css'

function Weather(props) {
    let colors = props.colorMode()
    
    const closeWeather = () => {
        document.querySelector('.screen-weather').style.display = 'none';
    }
    
    const getCityFromInput = () => {
        let input = document.querySelector('.weather-container input').value
        document.querySelector('.weather-container input').value=''
        return input
    }
  
    
    return (
        <div className={"screen-weather"}>
            <div className={"weather-container"} style={{ background: colors.dark, borderColor: colors.light, color: colors.light }}>
                <div className="close" onClick={() => closeWeather()}>X</div>
                <img alt="weather-icon" src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}/>
                <h3>{props.data.temp} C</h3>
                <p>{props.data.city}</p>
                <input type="text" placeholder="City"></input>  
                <button onClick={() => props.handler(getCityFromInput())}>OK</button>
                {props.data.change?null:<p className="err">*** Try Another City ***</p>}
            </div>
        </div>
    )
}

export default Weather

