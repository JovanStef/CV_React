import React, { Component } from 'react'
import uConv from 'convert-units';

class UnitConverter extends Component {
    state={
        measurments:[],
        currentMeasurments:[],
        measurment:'mass'

        }

        componentDidMount(){
            this.setState({
                measurments:uConv().measures()
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
render(){

    return (
        <div className="converter-wrapper">
            <div className="radio-wrapper">
                {this.createRadioBtn()}
            </div>
            <div className="measurm-opt-wrapper">
                <span>From </span>{this.createOptforMeasurments(this.state.measurment,'from')}
            </div>
            <input type="text" id="from"></input>
            <div className="measurm-opt-wrapper">
                <span>To </span>{this.createOptforMeasurments(this.state.measurment,'to')}
            </div>
            <p>Result</p>
            <button>Convert</button>
            blaaaaaa
        </div>
    )
}
}

export default UnitConverter
