import './BMR.css'
import { Component } from 'react';
import BMRActLabels from './BMRActLabels';

class BMR extends Component {
  constructor() {
    super()
    this.state =
    {
      activityLevels: [

        { text: "Light Activity (light exercise 1-3 days/week)", val: "1.375" },
        { text: "Moderate Activity (moderate exercise 3-4 days/week)", val: "1.55" },
        { text: "Intense Activity (Intense exercise 5-6 days/week)", val: "1.725" },
        { text: "Extreme Activity (very Intense exercise & physical job)", val: "1.9" }
      ],
      BMR: 0,
      MC: 0

    }



  }
  onActClick = () => {
    let BMR;
    let age = parseInt(document.querySelector('#age').value);
    let inch = parseInt(document.querySelector('#inches').value);
    let feet = parseInt(document.querySelector('#feet').value) * 12;
    let weight = parseFloat(document.querySelector('#weight').value);
    let active = document.querySelector('input[name="activity"]:checked').value;
    let ht = inch + feet;
    if (!isNaN(age) && !isNaN(inch) && !isNaN(weight) && !isNaN(feet)) {
      if (document.querySelector('input[name="gender"]:checked').value === 'Male') {
        BMR = 66 + (6.3 * weight) + (12.9 * ht) - (6.8 * age)

      }
      else {
        BMR = 655 + (4.3 * weight) + (4.7 * ht) - (4.7 * age)
      }
      this.setState({ BMR: parseInt(BMR), MC: Math.round(BMR * active) });
    }
  }

  render() {
    return (
      <form>
        <div className="container-fluid BMR mt-5">
          <div className="row bmr-row">
            <div className="col-5">
              <p className="label-BMR">Age</p>
              <input type="number" className="form-control" id="age" placeholder="Years" onChange={this.onActClick} defaultValue={0}/>
            </div>
            <div className="col-5">
              <p className='label-BMR'>Gender</p>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="male" value="Male"  defaultChecked onClick={this.onActClick}/>
                <div className="text-start">
                  Male
                </div>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="fem" value="Female" onClick={this.onActClick}/>
                <div className="text-start" >
                  Female
                </div>
              </div>
            </div>
          </div>
          <div className="row bmr-row mt-3">
            <div className="col-5">
              <p className="label-BMR">Height</p>
              <input type="number" className="form-control" id="feet" placeholder="Feet" onChange={this.onActClick} defaultValue={0}/>
            </div>
            <div className="col-5">
              <p className='label-BMR'>"</p>
              <input type="number" className="form-control" id="inches" placeholder="inches"  onChange={this.onActClick} defaultValue={0}/>
            </div>
          </div>
          <div className='row bmr-row mt-3'>
            <div className="col">
              <p className='label-BMR'>Current Weight</p>
              <input type="number" className="form-control" id="weight" placeholder="lbs" onChange={this.onActClick} defaultValue={0}/>
            </div>

          </div>
          <div className="row bmr-row mt-3">
            <div className="col">
              <p className='label-BMR'>Activity Level</p>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="activity" value={1.2} defaultChecked onClick={this.onActClick}/>
                <div className="text-start" >
                Sedentary (Little to no exercise)
                </div>
              </div>
              {this.state.activityLevels.map((act) =>
                <BMRActLabels text={act.text} val={act.val} key={act.val} clicked={this.onActClick}/>
              )}
            </div>
          </div>
          <div className="row bmr-value-container mt-4 mb-4">
            <div className="col text-end">
              <p className='label-BMR text-end bmr-values'>BMR:</p>
              <p className='bmr-text'>{this.state.BMR}</p>
              <p className='label-BMR text-end bmr-values'>Maintainence Calories:</p>
              <p className='bmr-text'>{this.state.MC}</p>
             
            </div>
          </div>


        </div>
      </form>

    )
  }
}


export default BMR;