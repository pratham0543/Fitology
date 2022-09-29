import Navbar from './navbar/Navbar';
import './App.css';
import Footer from './footer/Footer';
import { Component } from 'react';
import Home from './components/Home/Home';

class App extends Component{
  constructor(props){
    super(props);
  }
  render()
  {
    return(
      <>

        <Navbar/>
       <Home/>
        <Footer/>
      </>
    )
  }


}

export default App;