import './homeservices.css';
import Servicesitem from './Servicesitem';
import img1 from "./transformation.png";
import img2 from "./exercise.png"
import img3 from "./calculator.png"
function HomeServices(){
  
    return(
            <div className="homeservices-parent-container">
                <h2 className="homeservices-heading">SERVICES</h2>
                <h4 className="homeservices-subheading1">Trying to lose weight, tone up, lower your BMI, or invest in your overall health?</h4>
                <h4 className="homeservices-subheading2">We give you the right features to hit your goals.</h4>
                <div className="item-container">

                <Servicesitem  classname="item1" imageurl={img1} headingcontent="TRANSFORMATION PLAN" buttoncontent="GET NOW >"/>
                <Servicesitem  classname="item2" imageurl={img2} headingcontent="EXERCISE TUTORIAL" buttoncontent="VIEW NOW >"/>
                <Servicesitem classname="item3" imageurl={img3} headingcontent="HEALTH CALCULATOR" buttoncontent="USE NOW >"/>
                </div>
                </div>
            
    )
}
export default HomeServices;