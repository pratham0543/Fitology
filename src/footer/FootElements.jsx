import { Link } from "react-router-dom";
const FootElements=(props)=>
{
    return(
        <>
        <Link to={props.path}><li className="mb-3">
            <i className={props.icon}></i>
        <span className="ms-2">{props.text}</span>
      </li></Link>
      </>
    )
}
export default FootElements;