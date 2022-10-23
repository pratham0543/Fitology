import { Component } from "react"
import './bmi.css'
class BMI extends Component {
  constructor() {
    super()
    this.state = {
      BMI: 0,
      color: "",
      category: "_______",
    }
  }
  onBTNClick=()=>{
    const ht=parseFloat(document.querySelector('#bmi-ht').value);
    const wt=parseInt(document.querySelector('#bmi-wt').value);
    let fBMI=wt/(ht*ht);
    if(!isNaN(fBMI)){
      const BMI=fBMI.toFixed(2);
      
      if(BMI<=18.5)
      {
        this.setState({BMI:BMI,color:"var(--purple)",category:"UNDERWEIGHT"});
      }  
      else if(BMI<=25)
      {
        this.setState({BMI:BMI,color:"var(--green)",category:"NORMAL"});
      }
      else if(BMI<=30)
      {
        this.setState({BMI:BMI,color:"red",category:"OVERWEIGHT"});
      }
      else if(BMI>40)
      {
        this.setState({BMI:BMI,color:"red",category:"OBESE"});
      }
  }
  
   
    
  }

  render() {
    return (
        <div className="container-fluid bmi-container mt-5">
          <p className="text-start">Calculate BMI for age 18-65</p>
          <div className="row">
            <div className="col">
              <p className="text-start bmi-label">Height</p>
              <input type="number" className="form-control" id="bmi-ht" placeholder="in metres"/>
            </div>
            <div className="col">
              <p className="text-start bmi-label">Weight</p>
              <input type="number" className="form-control" id="bmi-wt" placeholder="in kgs" />
            </div>
            <div className="row">
              <div className="col text-start mt-3">
                <button type="submit" className="btn btn-dark" onClick={this.onBTNClick} >Calculate</button>
              </div>
            </div>

          </div>
          <div className="row bmi-value-container mt-3 mb-4">
            <div className="col text-end">
              <p className='label-BMR text-end bmr-values'>BMI:</p>
              <p className='bmr-text'>{this.state.BMI}</p>
            </div>
            <div className="row">
              <div className="col">
              <p className="text-center">You are <span style={{color:`${this.state.color}`}}>{this.state.category}</span></p>
              </div>
            </div>
            <hr />
            <div className="bmi-limit text-muted">
            BMI is not used for muscle builders, long distance athletes, pregnant women, the elderly or young children.
            </div>
          </div>
        </div>

    )
  }


}



export default BMI