import React from 'react'

const GetPdf = (props) => {
  return (
    <a href={props.pdf} target="_blank" rel="noopener noreferrer"> <div className="card mt-3" style={{width: "18rem"}}>
    <div className='iframe-card' style={{overflow:"hidden"}}>
            <object data={props.pdf  + `#toolbar=0`} frameBorder="0" className='iframe-pdf'  title='pdf viewer'  allowtransparency="true" type='application/pdf' ></object>
    </div>            
        <div className="card-body">
            <h5 className="card-title"><i className="fa-solid fa-file-pdf me-2 file-icon"></i><span>{props.name}</span></h5>
        </div>
</div></a>
  )
}

export default GetPdf