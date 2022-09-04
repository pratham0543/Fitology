import './navbar.css';
function Navbar(){
return(
    <div className="main">
    <nav className="navbar bg-light">
  <div className="container-fluid ">
    <a className="navbar-brand" href="./index.html">
    <i className="fa-solid fa-dumbbell me-2"></i>
       <span> FITOLOGY</span>
    </a>
    

    <button type="button" id="login-btn" className="btn btn-primary login-button" data-bs-toggle="modal" data-bs-target="#ModalForm">Login/Sign Up</button>
        <div class="modal fade" id="ModalForm" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="myform">
                        <h1 class="text-center">Login Form</h1>
                        <form>
                            <div class="mb-3 mt-4">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" class="btn btn-light mt-3" >LOGIN</button>
                            <p>Not a member? <a href="#">Signup now</a></p>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>

  </div>
</nav>
<nav className="navbar navbar-expand-lg nav-content">
  <div className="container-fluid">
    
    <button className="icon-button-toggle navbar-toggler toggle_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span><i className="fa-solid fa-bars"></i></span>
    </button>
    <div className="collapse navbar-collapse nav-ul" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link "  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nutrition</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Plans</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Exercises</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
)}


export default Navbar;