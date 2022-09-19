import Navbar from './navbar/Navbar.jsx';
import './App.css';
import HomeServices from './Services/HomeSerivces.jsx';
import Start from './Getstarted/Start';
import Footer from './footer/Footer';
import Testi from './Testimonials/Testi';
import HomeBlog from './HomeBlogs/HomeBlog.jsx';
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
        <HomeServices/>
        <HomeBlog/>
        <Testi/>
        <Footer/>
      </>
    )
  }


}

export default App;