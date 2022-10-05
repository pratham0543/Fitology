import Navbar from './navbar/Navbar';
import './App.css';
import Footer from './footer/Footer';

import { Component } from 'react';
import Home from './components/Home/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nutrition from './components/Nutrition/Nutrition';

class App extends Component{

  render()
  {
    return(
      
     <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/"  element={<Home/>}  />
            <Route path='/nutrition' element={<Nutrition/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>

    )
  }


}

export default App;