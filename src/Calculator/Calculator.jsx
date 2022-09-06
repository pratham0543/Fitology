import './Calculator.css';
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
            <div className="main-container">
                <h2 className="calculator-heading">TOOLS YOU MIGHT NEED</h2>
                <h4 className="calculator-subheading1">Trying to lose weight, tone up, lower your BMI, or invest in your overall health?</h4>
                <h4 className="calculator-subheading2">We give you the right features to hit your goals.</h4>
                <div className="item-container">
                        <div className="items" onClick={item1click}>
                            <img className="item1" src={require('./bmr.png')} alt=""/>
                            <h4 className="card-heading1">BMR Calculator</h4>
                            <h5 className="card-heading2">Keeping a food diary helps you <br /> understand your habits and <br /> increases your  likelihood <br /> of hitting your goals.</h5>
                        </div>
                    <div className="items" onClick={item2click}>
                        <img className="item2" src={require('./fat.png')} alt=""/>
                        <h4 className="card-heading1">Fat Percentage</h4>
                        <h5 className="card-heading2">Keeping a food diary helps you <br /> understand your habits and <br /> increases your  likelihood <br /> of hitting your goals.</h5>
                        </div>
                    <div className="items" onClick={item3click}>
                        <img className="item3" src={require('./bmi.png')} alt=""/>
                        <h4 className="card-heading1">BMI Calculator</h4>
                        <h5 className="card-heading2">Keeping a food diary helps you <br /> understand your habits and <br /> increases your  likelihood <br /> of hitting your goals.</h5>
                        </div>
                </div>
                </div>
            
    )
}
export default Calculator;