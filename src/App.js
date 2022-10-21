import Navbar from './navbar/Navbar';
import './App.css';
import Footer from './footer/Footer';

import { Component } from 'react';
import Home from './components/Home/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nutrition from './components/Nutrition/Nutrition';
import Calculator from './components/Calculator/Calculator';
import BMR from './components/Calculator/BMR';
import BMI from './components/Calculator/BMI';
import BodyFat from './components/Calculator/BodyFat';
class App extends Component{

  render()
  {
    return(
      
     <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/"  element={<Home/>}  />
            <Route path='/nutrition' element={<Nutrition/>} />
            <Route path='/calcu' element={<Calculator/>}>
            <Route index element={<BMR/>}/> 
              <Route path='BMR' element={<BMR/>}/> 
              <Route path='BMI' element={<BMI/>}/>
              <Route path='BodyFat' element={<BodyFat/>}/>
              </Route>
        </Routes>
        <Footer/>
        </BrowserRouter>

    )
  }


}

export default App;