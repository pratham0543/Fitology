import './navbar.css';
import LoginModal from './LoginModal';
import NavElements from './NavElements';
import { Component } from 'react';
class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navtext: ['Home', 'Nutrition', 'Sports', 'Plans', 'Exercises', 'Blogs', 'Calculators', 'Contact Us'],
      modalshow:true
    }
  }
  onhidehandler=()=>{
    let statevalue=this.state.modalshow;
    this.setState({modalshow:!statevalue})
  }
  render(){
    let loginmodal=(null);
    if(this.state.modalshow){
        loginmodal=(<LoginModal />)
    }
    return (
      <div className="main">
        <nav className="navbar bg-light">
          <div className="container-fluid ">
            <a className="navbar-brand" href="./index.html">
              
              <h2> <i className="fa-solid fa-dumbbell me-2"></i> FITOLOGY</h2>
            </a>
            <button type="button" id="login-btn" className="btn btn-primary login-button" data-bs-toggle="modal" data-bs-target="#ModalForm">Login/Sign Up</button>

            {/* login modal */}
            {loginmodal}
            {/* <LoginModal />}}
            {/* login modal finished */}
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg nav-content">
          <div className="container-fluid">


            <button className="icon-button-toggle navbar-toggler toggle_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span><i className="fa-solid fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse nav-ul" id="navbarNav">
              <ul className="navbar-nav navbar-responsive">
                {/* Provide with href links in props */}
      
                {this.state.navtext.map((text, index) =>
                  <NavElements text={text} key={index} />

                )}

              </ul>
            </div>
          </div>
        </nav>



      </div>
    )
  }
}

export default Navbar;