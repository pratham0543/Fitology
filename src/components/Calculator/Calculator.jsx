import { Component } from "react";
import './calculator.css'
import {Outlet,Link} from 'react-router-dom'
class Calculator extends Component {
   


   
    render() {

        return (
            <div className="calculator">
                <div className="calculator-header">
                    <h1>Calculators</h1>
                    <p>Measure your daily intake of calories, body mass index (BMI), basal metabolic rate (BMR) with our most accurate calculators
                        to help you achive your desired goals in fitness.</p>
                </div>
                <div className="calculator-links">
                    <ul>
                        <Link to='BMR' className="me-5 calculator-links-li">BMR</Link>
                        <Link to="BMI" className="me-5 calculator-links-li" >BMI</Link>
                        <Link to="BodyFat" className="me-5 calculator-links-li">BODY FAT%</Link>
                    </ul>
                </div>
                <Outlet/>
            </div>
        )
    }
}

export default Calculator