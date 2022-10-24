import {Link} from 'react-router-dom'

function Servicesitem(props){
    return(
        <div className="items">
                <div className="item-container1"><img className={props.classname} src={props.imageurl} alt="..."/></div>
                <h4 className="card-heading1">{props.headingcontent}</h4>
                <Link to={props.path}><button type="button" className="btn btn-outline-dark items-button">{props.buttoncontent}</button></Link>
        </div>
    )
}
export default Servicesitem;