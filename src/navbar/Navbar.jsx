import './navbar.css';
import SignUp from './SignUpModal';
import LoginModal from './LoginModal';
import { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
// import Modal from 'react-bootstrap/Modal';
class Navbar extends Component {
   constructor(props)
   {
    super(props)
    this.state={
      signShow:false,
      loginShow:false,
      signInfo:"",
      loginInfo:"",
      userName:"",
      showLoader:false
    }
   }

    signShow=()=>this.setState({signShow:true});
    signUp=(name,number,email,password)=>
    {

      const newUser={
        name:name,
        number:number,
        email:email,
        password:password
      }
      // Call api for signup and start the session
      axios.post('http://localhost:5000/signup',newUser)
      .then(response=>{
        console.log(response.data);
        this.setState({signShow:false})
        this.login(newUser.email,newUser.password)
      })
      .catch(err=>{
        console.log(err.response.data.mes)
        this.setState({signInfo:err.response.data.mes})
      })
      
      
      //console.log("signup successful",name,number,email,password);


    }
    signLogin=()=>
    {
      this.setState({signShow:false,loginShow:true})
    }


    //login method to start a session
    login=(email,password)=>
    {
      //call api and start session fro login 
        const user={
          email:email,
          password:password
        }
        this.setState({showLoader:true})
        axios.post('http://localhost:5000/login',user)
        .then(result=>
          {
              this.setState({userName:result.data.username,loginInfo:result.data.username,showLoader:false,loginShow:false})
          }
        )
        .catch(err=>{
            console.log(err.response.data)
            this.setState({loginInfo:err.response.data.mes,showLoader:false})
        }
            )

        // axios.get('http://localhost:5000/login')
        // .then(result=>
        //   console.log(result)
        //   )
        //   .catch(err=>console.log(err))

      // console.log("Login successfull");
      //this.setState({loginShow:false});
    }
    logout=()=>
    {
      this.setState({userName:""})
    }
  
  render() {
              let loginBtn= <button type="button" id="login-btn" className="btn btn-primary login-button" onClick={this.signShow}>Login/Sign Up</button>

          if(this.state.showLoader)
          {
              loginBtn=(<div className="">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>)
          }
          else if(this.state.userName!==""){
            loginBtn=<p className='username'><span>Welcome, {this.state.userName} |</span><span className='text-primary logout-btn' onClick={this.logout}> Logout </span>   </p>
          }

    return (
      <div className="main">
        <nav className="navbar bg-light">
          <div className="container-fluid ">
            <a className="navbar-brand" href="/">

              <h2> <i className="fa-solid fa-dumbbell me-2"></i> FITOLOGY</h2>
            </a>
           {loginBtn}

            {/* Modal react bootstrap */}
           
            <SignUp signUp={(name,number,email,password)=>this.signUp(name,number,email,password)} show={this.state.signShow} signLogin={this.signLogin} hide={()=>{this.setState({signShow:false})}}  info={this.state.signInfo}/>

      {/* Model end */}
                <LoginModal login={(email,pass)=>this.login(email,pass)} show={this.state.loginShow} hide={()=>{this.setState({loginShow:false})}} info={this.state.loginInfo}></LoginModal>

          </div>
        </nav>
        <nav className="navbar navbar-expand-lg nav-content">
          <div className="container-fluid">
            <button className="icon-button-toggle navbar-toggler toggle_button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvasExample">
              <span><i className="fa-solid fa-bars"></i></span>
            </button>
            <div className="offcanvas offcanvas-start "  
            tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
              <div className="offcanvas-header">
                <a className="navbar-brand" href="./index.html">
                  <h2> <i className="fa-solid fa-dumbbell me-2"></i> FITOLOGY</h2>
                </a>
                <button type="button" className="btn" data-bs-dismiss="offcanvas" ><i className="fa-solid fa-xmark"></i></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <div data-bs-dismiss="offcanvas"><Link className="nav-link" to="/nutrition" >Nutrition</Link></div>
                  </li>
                  <li className="nav-item">
                    <div data-bs-dismiss="offcanvas"><Link className="nav-link" to="transformed">Transformation Plan</Link></div>
                  </li>
                  <li className="nav-item">
                    <div data-bs-dismiss="offcanvas"><Link className="nav-link" to="/exercises">Exercises</Link></div>
                  </li>
                  <li className="nav-item">
                    <div data-bs-dismiss="offcanvas"><Link to='/calcu' className="nav-link" >Calculators</Link></div>
                  </li>
                  <li className="nav-item">
                   <div data-bs-dismiss="offcanvas"> <Link className="nav-link" to='/contactUs'>Personalized Plan</Link></div>
                  </li>
                </ul>
              </div>
              <div className="offcanvasFooter">
                <p className="text-muted ">All Rights Reserved | Copyright <i className="fa-regular fa-copyright"></i> <span style={{ color: "var(--purple)" }}>Fitology 2022</span> <i className="fa-solid fa-copyright"></i></p>

              </div>
            </div>
          </div>
        </nav>
      </div>
    
    )
  }
}

export default Navbar;