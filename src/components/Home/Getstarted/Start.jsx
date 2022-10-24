import './start.css'
import fit from "./fitness.png"
import { Link } from 'react-router-dom'
const Start=()=>
{
    return(
        <div className="start">
            <img src={fit} alt=""/>
            <div className='start_para'>
                <h1 className="heading  animate__animated  animate__fadeInLeft"><span className="left-quote">“</span>Fitness is a Lifestyle not a Destination<span className="right-quote">”</span>
                </h1>
                    <p className='mx-auto pt-0'> Goals are meant to be achieved, records are meant to be broken.
                    Be it any goal muscle building,fat loss,weight loss or just maintenence we have the right guidance on how to 
                    achieve and shape your body.</p>
                <Link to="/nutrition"><button type="button" className="btn btn-dark start_btn rounded">GET STARTED</button></Link>
                </div>
            </div>
        
        
    )

}
export default Start;