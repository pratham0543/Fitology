import Navbar from './Navbar/Navbar.jsx';
import './App.css';
import Calculator from './Calculator/Calculator';
import Start from './Getstarted/Start';
import Footer from './footer/Footer';
import Testi from './Testimonials/Testi';
import Blog from './Blogs/Blog'
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
        <Start/>
        <Calculator/>
        <Blog/>
        <Testi/>
        <Footer/>
      </>
    )
  }


}

export default App;