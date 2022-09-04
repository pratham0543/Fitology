import './navbar.css';
function Navbar(){

return(
    <div>
    <nav className="navbar bg-light">
  <div className="container-fluid ">
    <a className="navbar-brand" href="./index.html">
    <i className="fa-solid fa-dumbbell me-2"></i>
       <span> FITOLOGY</span>
    </a>
    <button id="login-btn" className="btn btn-primary">Login/Sign Up</button>
  </div>
</nav>
<nav className="navbar navbar-expand-lg nav-content">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
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

)


}

export default Navbar;