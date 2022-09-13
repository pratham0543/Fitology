import './Calculator.css';
import Calculatoritem from './Calculatoritems';
function Calculator(){
    function item1click() {
        window.location.href = "#";
    }
    function item2click() {
        window.location.href = "#";
    }
    function item3click() {
        window.location.href = "#";
    }
    return(
            <div className="calculator-parent-container">
                <h2 className="calculator-heading">SERVICES</h2>
                <h4 className="calculator-subheading1">Trying to lose weight, tone up, lower your BMI, or invest in your overall health?</h4>
                <h4 className="calculator-subheading2">We give you the right features to hit your goals.</h4>
                <div className="item-container">

                <Calculatoritem click={item1click} classname="item1" imageurl={require('./transformation.png')} headingcontent="TRANSFORMATION PLAN" buttoncontent="GET NOW >"></Calculatoritem>
                <Calculatoritem click={item2click} classname="item2" imageurl={require('./exercise.png')} headingcontent="EXERCISE TUTORIAL" buttoncontent="VIEW NOW >"></Calculatoritem>
                <Calculatoritem click={item3click} classname="item3" imageurl={require('./calculator.png')} headingcontent="HEALTH CALCULATOR" buttoncontent="USE NOW >"></Calculatoritem>

                </div>
                </div>
            
    )
}
export default Calculator;