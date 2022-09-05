import Navbar from './Navbar/Navbar.jsx';
import './App.css';
import Calculator from './Calculator/Calculator.jsx';
import Footer from './footer/Footer.jsx';
import { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props);
  }



  render()
  {
    return(
      <div>
        <Navbar/>
        {/* Apply animate .css slide in in this heading */}
        <h1 className="heading mt-4 animate__animated  animate__fadeInLeft"><i><span className="left-quote">“</span>Fitness is a Lifestyle not a Destination<span className="right-quote">”</span></i> </h1>
        {/* Calculator Start */}
        <Calculator/>
        {/* Calculator End */}
      </div>
    )
  }


}

export default App;