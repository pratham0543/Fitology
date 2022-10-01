import './navbar.css';
import LoginModal from './LoginModal';
import { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {

  render() {

    return (<>
      <div className="main">
        <nav className="navbar bg-light">
          <div className="container-fluid ">
            <a className="navbar-brand" href="/">

              <h2> <i className="fa-solid fa-dumbbell me-2"></i> FITOLOGY</h2>
            </a>
            <button type="button" id="login-btn" className="btn btn-primary login-button" data-bs-toggle="modal" data-bs-target="#ModalForm">Login/Sign Up</button>

            {/* login modal */}
            {LoginModal}
            {/* <LoginModal />}}
            {/* login modal finished */}
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg nav-content">
          <div className="container-fluid">
            <button className="icon-button-toggle navbar-toggler toggle_button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvasExample">
              <span><i className="fa-solid fa-bars"></i></span>
            </button>
            <div className="offcanvas offcanvas-start " data-bs-scroll="true" 
            tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
              <div className="offcanvas-header">
                <a className="navbar-brand" href="./index.html">
                  <h2> <i className="fa-solid fa-dumbbell me-2"></i> FITOLOGY</h2>
                </a>
                <button type="button" className="btn" data-bs-dismiss="offcanvas" ><i class="fa-solid fa-xmark"></i></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Nutrition</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Get Transformed</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Exercises</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blogs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Calculators</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="offcanvasFooter">
                <p className="text-muted ">All Rights Reserved | Copyright <i class="fa-regular fa-copyright"></i> <span style={{ color: "var(--purple)" }}>Fitology 2022</span> <i class="fa-solid fa-copyright"></i></p>

              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
    )
  }
}

export default Navbar;