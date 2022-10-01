import Navbar from './navbar/Navbar';
import './App.css';
import Footer from './footer/Footer';

import { Component } from 'react';
import Home from './components/Home/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

class App extends Component{

  render()
  {
    return(
      
     <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/"  element={<Home/>}  />
        </Routes>
        <Footer/>
        </BrowserRouter>

    )
  }


}

export default App;