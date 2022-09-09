import './testi.css'
import Caritems from './Caritems';
const Testi = () => {

  return (
    <>
      <h2 className="calculator-heading testi-heading">OUR CLIENT TESTIMONIALS</h2>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <Caritems active="active" smile="fa-regular fa-face-laugh-beam"></Caritems>
          <Caritems smile="fa-regular fa-face-laugh" ></Caritems>
          <Caritems smile="fa-regular fa-face-smile-wink"></Caritems>
          <Caritems smile="fa-regular fa-face-grin-beam"></Caritems>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <p className="carousel-control-prev-icon" aria-hidden="true"></p>
          <p className="visually-hidden">Previous</p>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <p className="carousel-control-next-icon" aria-hidden="true"></p>
          <p className="visually-hidden">Next</p>
        </button>
      </div>
    </>





  )

}
export default Testi;