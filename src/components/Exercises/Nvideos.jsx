import React from 'react'

const Nvideos = (props) => {
  return (
    
    <div className="card exercises-card mt-3" style={{ width: "18rem" }}>
                    <img src={props.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-title vid-para">{props.title}</p>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>
  )
}

export default Nvideos