import React from 'react'
import { Modal } from 'react-bootstrap'
import CloseButton from 'react-bootstrap/CloseButton';
const LoginModal = (props) => {

    const logIn=()=>
    {
        //apply validations
        const email=document.querySelector('#email').value;
        const password=document.querySelector('#password').value;
        
        props.login(email,password);
    
    }


  return (
    <Modal show={props.show} centered>
    <Modal.Header >
        <Modal.Title>Login  <CloseButton className="close-btn" onClick={props.hide}/> </Modal.Title>
    </Modal.Header>
    <Modal.Body  className="navbar-modal">
        <div className="mb-3">
            <label htmlFor="email" >Email</label>
            <input type="email" className="form-control" id="email" placeholder="abc@example.com"/>
        </div>

        <div className="mb-3">
            <label htmlFor="password" >Password</label>
            <input type="password" className="form-control" id="password" placeholder=""/>
        </div>

    </Modal.Body>
    <Modal.Footer>
        
        <button className="btn btn-primary  text-end signup-btn" onClick={logIn}>
           Login
        </button>
        <p className='text-danger signUpInfo'>
            {props.info}
        </p>
    </Modal.Footer>
</Modal>
  )
}

export default LoginModal