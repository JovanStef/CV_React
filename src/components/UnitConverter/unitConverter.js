import React, { Component } from 'react';
import './unitCoverter.css'
import uConv from 'convert-units';

class UnitConverter extends Component {
    state={
        measurments:[],
        currentMeasurments:[],
        measurment:'mass',
        result:'0'
        }

        componentDidMount(){
            this.setState({
                measurments:uConv().measures()
            })
        }

        convert=()=>{
                let from = document.querySelector('#from').value
                let to = document.querySelector('#to').value
                let value = document.querySelector('#value').value
                let result = uConv(value).from(from).to(to).toFixed(3)+' '+to
                return this.setState({
                    result
                })
        }

   radioBtnListener =(e)=>{
        console.log(e.target.value)
        return this.setState({
            measurment:e.target.value
        })
    }

    createRadioBtn = () => {
        return this.state.measurments.map((elem, i) => {
            return (
                <div key={i}>
                    <input type="radio" id={elem} name="conv" value={elem} onChange={this.radioBtnListener}/>
                    <label>{elem.toUpperCase()}</label>
                </div>
            )
        })
    }

    createOptforMeasurments = (measure,type)=>{
            let opt = uConv().possibilities(measure);
            return(
                <select id={type} name={measure}>
                    {opt.map((elem,i)=>{
                        return <option key={i} value={elem}>{elem}</option>
                    })}
                </select>
            )
    }

    close=()=>{
        document.querySelector('.screen-conv').style.display='none'
    }

render(){

    return (
        <div className="screen-conv">

        <div className="converter-wrapper">
            <div className="radio-wrapper">
                {this.createRadioBtn()}
            </div>
            <div className="measurment-wrapper">
<div className="opt-wrapper">

            <div className="measurment-opt-wrapper">
                <span>From </span>{this.createOptforMeasurments(this.state.measurment,'from')}
            </div>
            <div className="measurment-opt-wrapper">
                <span>To </span>{this.createOptforMeasurments(this.state.measurment,'to')}
            </div>
</div>

            <div>
            <input type="text" id="value"></input>
            <button onClick={()=>this.convert()}>Convert</button>
            </div>
            <p id="result">{this.state.result}</p>
            </div>
            <button className="close" onClick={()=>this.close()}>X</button>
        </div>
        </div>
    )
}
}

export default UnitConverter
