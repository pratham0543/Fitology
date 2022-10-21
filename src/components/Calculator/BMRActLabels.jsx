
const BMRActLabels = ({text,val,clicked}) => {
  
  return (
    <div className="form-check">
    <input className="form-check-input" type="radio" name="activity"  value={val} onClick={clicked} />
    <div className="text-start" >
     {text}
    </div>
  </div>
  )
}

export default BMRActLabels;