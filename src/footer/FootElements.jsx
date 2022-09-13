const FootElements=(props)=>
{
    return(
        <li className="mb-3">
            <i className={props.icon}></i>
        <a className="ms-2">{props.text}</a>
      </li>
    )
}
export default FootElements;