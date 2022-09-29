

function Servicesitem(props){
    return(
        <div className="items">
                <div className="item-container1"><img className={props.classname} src={props.imageurl}/></div>
                <h4 className="card-heading1">{props.headingcontent}</h4>
                <button type="button" className="btn btn-outline-dark items-button"><span>{props.buttoncontent}</span></button>
        </div>
    )
}
export default Servicesitem;