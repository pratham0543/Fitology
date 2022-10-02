import './homeservices.css';
import Servicesitem from './Servicesitem';
function HomeServices(){
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
            <div className="homeservices-parent-container">
                <h2 className="homeservices-heading">SERVICES</h2>
                <h4 className="homeservices-subheading1">Trying to lose weight, tone up, lower your BMI, or invest in your overall health?</h4>
                <h4 className="homeservices-subheading2">We give you the right features to hit your goals.</h4>
                <div className="item-container">

                <Servicesitem click={item1click} classname="item1" imageurl={require('./transformation.png')} headingcontent="TRANSFORMATION PLAN" buttoncontent="GET NOW >"/>
                <Servicesitem click={item2click} classname="item2" imageurl={require('./exercise.png')} headingcontent="EXERCISE TUTORIAL" buttoncontent="VIEW NOW >"/>
                <Servicesitem click={item3click} classname="item3" imageurl={require('./calculator.png')} headingcontent="HEALTH CALCULATOR" buttoncontent="USE NOW >"/>
                </div>
                </div>
            
    )
}
export default HomeServices;