import Navbar from './Navbar/Navbar.jsx';
import './App.css';
import { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props);
  }



  render()
  {
    return(
        <Navbar></Navbar>
    )
  }


}

export default App;