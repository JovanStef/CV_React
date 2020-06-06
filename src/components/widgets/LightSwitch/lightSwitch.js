import React from 'react';
import './lightSwitch.css';

const LightSwitch=({colorMode , switchColorMode})=> {
    return (
        <div className="light-switch" onClick={()=>switchColorMode()}>
        <img alt={`${colorMode().icon}`} src={`images/icons/${colorMode().icon}`} style={{background:colorMode().light, borderColor:colorMode().dark}}/>
        </div>
    )
}

export default LightSwitch
