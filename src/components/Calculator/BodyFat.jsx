import { Component } from "react"
class BodyFat extends Component{
  constructor(){
    super()
    this.state = {
      bfat: 0,
      color: "",
      category: "_______",
    }
  }
onBFCalc=()=>{
  const ht=parseFloat(document.querySelector('#bf-ht').value);
    const wt=parseInt(document.querySelector('#bf-wt').value);
    const age=parseInt(document.querySelector("#bf-age").value);
    let fBMI=wt/(ht*ht);
    if(!isNaN(fBMI)){
      const BMI=fBMI.toFixed(2);
      let BF=0;
      
      if (document.querySelector('input[name="gender"]:checked').value === 'Male') {
        BF = (1.20 * BMI) + (0.23 *age) - 16.2
        if(BF>=2 && BF<=5)
        {
          this.setState({bfat:BF.toFixed(2),color:"var(--purple)",category:"Essential Fat"});
        }  
        else if(BF<=13)
        {
          this.setState({bfat:BF.toFixed(2),color:"var(--green)",category:"Athlete"});
        }
        else if(BF<=17)
        {
          this.setState({bfat:BF.toFixed(2),color:"var(--green)",category:"Fitness"});
        }
        else if(BF<=24)
        {
          this.setState({bfat:BF.toFixed(2),color:"var(--purple)",category:"Average"});
        }
        else if(BF>=25)
        {
          this.setState({bfat:BF.toFixed(2),color:"red",category:"Obese"})
        }
        
        
      }
      else {
        BF = (1.20 * BMI) + (0.23 *age)  - 5.4
        if(BF>=10 && BF<=13)
        {
          this.setState({bfat:BF.toFixed(2),color:"var(--purple)",category:"Essential Fat"});
        }  
        else if(BF<=20)
        {
          this.setState({bfat:BF.toFixed(2),color:"var(--green)",category:"Athlete"});
        }
        else if(BF<=24)
        {
          this.setState({bfat:BF.toFixed(2),color:"var(--green)",category:"Fitness"});
        }
        else if(BF<=31)
        {
          this.setState({bfat:BF.toFixed(2),color:"var(--purple)",category:"Average"});
        }
        else if(BF>=32)
        {
          this.setState({bfat:BF.toFixed(2),color:"red",category:"Obese"});

        }
      }
     
      
  }
}


  render()
  {
    return(
      <div className="container-fluid bmi-container mt-5">
        <p className="text-start">Calculate BMI for age 18-65</p>
      <div className="row">
        <div className="col">
          <p className="text-start bmi-label">Height</p>
          <input type="number" className="form-control" id="bf-ht" placeholder="in metres"/>
        </div>
        <div className="col">
          <p className="text-start bmi-label">Weight</p>
          <input type="number" className="form-control" id="bf-wt" placeholder="in kgs" />
        </div>
        <div className="row bmr-row mt-3">
            <div className="col-5">
              <p className="label-BMR">Age</p>
              <input type="number" className="form-control" id="bf-age" placeholder="Years" defaultValue={0}/>
            </div>
            <div className="col-5">
              <p className='label-BMR'>Gender</p>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="male" value="Male"  defaultChecked />
                <div className="text-start">
                  Male
                </div>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="fem" value="Female"/>
                <div className="text-start" >
                  Female
                </div>
              </div>
            </div>
          </div>
        <div className="row">
          <div className="col text-start mt-3">
            <button type="submit" className="btn btn-dark" onClick={this.onBFCalc}>Calculate</button>
          </div>
        </div>

      </div>
      <div className="row bmi-value-container mt-3 mb-4">
        <div className="col text-end">
          <p className='label-BMR text-end bmr-values'>Body Fat%</p>
          <p className='bmr-text'>{this.state.bfat}</p>
        </div>
        <div className="row">
          <div className="col">
          <p className="text-center">You are in &nbsp;<span style={{color:`${this.state.color}`}}>{this.state.category} &nbsp;</span>category</p>
          </div>
        </div>
        <hr />
        {/* <div className="bmi-limit text-muted">
        BMI is not used for muscle builders, long distance athletes, pregnant women, the elderly or young children.
        </div> */}
      </div>
    </div>
    )
  }



}
export default BodyFat