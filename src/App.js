import { Component } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Video from './components/Exercises/Video';
import Home from './components/Home/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nutrition from './components/Nutrition/Nutrition';
import Calculator from './components/Calculator/Calculator';
import BMR from './components/Calculator/BMR';
import BMI from './components/Calculator/BMI';
import BodyFat from './components/Calculator/BodyFat';
import Exercises from './components/Exercises/Exercises';
import GetTransformed from './components/GetTransformed/GetTransformed';
import Personalized from './components/Personalized/Personalized';
class App extends Component{

    constructor()
    {
      super()
      this.state={
        vid:null,
        vname:null
      }
    }




    onClicked=(e)=>
    {
      this.setState({vid:e[0],vname:e[1]})
    }
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
            <Route path="/exercises" element={<Exercises clicked={this.onClicked}/>}/>
            <Route path='/video' element={<Video vid={this.state.vid} vname={this.state.vname}/>}/>
           <Route path='/transformed' element={<GetTransformed/>}/>
           <Route path='/contactUs' element={<Personalized/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>

    )
  }


}

export default App;