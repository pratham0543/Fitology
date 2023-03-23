import { Modal } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton';



const SignUpModal = (props) => {
      const signUp=()=>
      {

        //apply validation

        const name=document.querySelector('#name').value;
        const number=document.querySelector('#number').value;
        const email=document.querySelector('#email').value;;
        const password=document.querySelector('#password').value;

        props.signUp(name,number,email,password);



      }
    return (
        <Modal show={props.show}  centered>
            <Modal.Header >
                <Modal.Title>SignUp  <CloseButton className="close-btn" onClick={props.hide}/></Modal.Title>
            </Modal.Header>
            <Modal.Body  className="navbar-modal">
                <div className="mb-3">
                    <label htmlFor="name" >Name</label>
                    <input type="text" className="form-control" id="name" placeholder="name"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="number" >Contact Number</label>
                    <input type="number" className="form-control" id="number" placeholder=""/>
                </div>
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
                <button className="btn btn-primary  text-end signup-btn" onClick={signUp}>
                    Signup
                </button>
                <button className="btn btn-primary  text-end signup-btn" onClick={props.signLogin}>
                   Login
                </button>
                <p className="signUpInfo text-danger">{props.info}</p>
            </Modal.Footer>
        </Modal>
    )
}

export default SignUpModal;