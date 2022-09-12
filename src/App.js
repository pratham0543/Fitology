import Navbar from './Navbar/Navbar.jsx';
import './App.css';
import Calculator from './Calculator/Calculator.jsx';
import Start from './Getstarted/Start.jsx';
import Footer from './footer/Footer.jsx';
import Testi from './Testimonials/Testi.jsx';
import Blog from './Blogs/Blog.jsx'
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
  }



  render()
  {
    return(
      <>

        <Navbar/>
        {/* GetStarted section */}
       <Start/>
        {/* Calculator Start */}
        <Calculator/>
        {/* Calculator End */}
        {/* Testimonials */}
        <Testi/>
        <Blog/>
      </>
    )
  }


}

export default App;