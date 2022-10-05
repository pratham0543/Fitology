import './nutrition.css'
import img1 from './bowl.png'
import img2 from './nutri-body.png'
import { Component } from 'react'
import NutritionItem from './NutritionItem';
import axios from 'axios';

class Nutrition extends Component {
  constructor() {
    super()
    this.state={};
  }
 
  onSubmitHandler=(e)=>
  {
    const inp=document.querySelector('.nutrition-inp');
    const options = {
      method: 'GET',
      url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
      params: {query:inp.value},
      headers: {
        'X-RapidAPI-Key': 'a814fe09ffmsh69457473affc448p165d74jsn8987916490ca',
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    axios.request(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }




 
  render() {
    return (

      <>
        <div className="nutrition">
          <div className="img1 animate__animated  animate__fadeInLeft">
            <img src={img1} alt="..." />
          </div>
          <div className="nutrition-content animate__animated  animate__fadeInUp">
            <div className="nutrition-text">
              <h3>Fitness starts with what you eat</h3>
              <p>Track calories of various foods and get complete nutritional information to hit the right amount of daily calories.</p>
              <div class="input-group">

                <input type="text" className="form-control nutrition-inp" placeholder="Search for foods by their quantity or name" aria-label="Username" aria-describedby="basic-addon1" required/>
                <span className="input-group-text" id="basic-addon1" onClick={(e)=>this.onSubmitHandler(e)}><i className="fa-solid fa-magnifying-glass"></i></span>
              </div>

            </div>
          </div>
          <div className="img2 animate__animated  animate__fadeInRight">
            <img src={img2} alt="..." />
          </div>
        </div>
        <NutritionItem/>

      </>






    )
  }


}







export default Nutrition