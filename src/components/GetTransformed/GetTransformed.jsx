import React from 'react'
import './gettransformed.css'
import hiit from './HIIT-WORKOUT.pdf'
import GetPdf from './GetPdf'
import hwork from './HOME-WORKOUT-SERIES.pdf'
import wgwl from './WEIGHT-GAIN-WEIGTH-LOSS.pdf'
import wl from './WEIGHT-LOSS.pdf'
import d16 from './wt-loss-1600.jpg'
import d17 from './wt-loss-1700.jpg'
import d172 from './wt-loss-1700-2.jpg'


function GetTransformed() {
    return (
        <div className="container mt-5 animate__animated animate__fadeInLeft">
            <h1 className='trans-head'>
                Workouts
            </h1>
            <p>Whether you're into bodybuilding, crossfit, strength training or just getting started, these workouts and tips will help you reach your goals.</p>
            <div className="cardio-work mt-5  animate__animated animate__fadeInUp"><h3 className='trans-subheading '>
                Cardio Workouts
            </h3>
                <hr />
                <div  className="mt-2">
                    <GetPdf pdf={hiit} name="HIIT-WORKOUT.pdf" />
                </div>
            </div>
            <div className=" mt-5  animate__animated animate__fadeInUp"><h3 className='trans-subheading '>
                Weight Gain/ Weight Loss Programs
            </h3>
                <hr />
                <div className="wt-gain mt-2  animate__animated animate__fadeInUp">
                    <GetPdf pdf={hwork} name="Home Workout Series.pdf" />
                    <GetPdf pdf={wgwl} name="Weight Gain/ Weight Loss.pdf" />
                    <GetPdf pdf={wl} name="Weight Loss.pdf" />
                </div>
            </div>
            <div className=" mt-5  animate__animated animate__fadeInUp"><h3 className='trans-subheading '>
                Diet Plans
            </h3>
                <hr />
                <div className="wt-gain mt-2 mb-5">
                    <div className="card mt-3" style={{width: "18rem"}}>
                        <img src={d16} className="card-img-top" alt="..."/>
                        <a href={d16} target="_blank" rel="noopener noreferrer"> <div className="card-body">
                                <p className="card-title">1600 Calories Weight Loss Plan</p>
                            </div></a>
                    </div>
                    <div className="card mt-3 " style={{width: "18rem"}}>
                        <img src={d17} className="card-img-top d17" alt="..." />
                        <a href={d17} target="_blank" rel="noopener noreferrer"><div className="card-body">
                            <p className="card-title">1700 Calories Weight Loss Plan</p>
                            </div></a>
                    </div>
                    <div className="card mt-3" style={{width: "18rem"}}>
                        <img src={d172} className="card-img-top" alt="..."/>
                        <a href={d172} target="_blank" rel="noopener noreferrer"> <div className="card-body">
                           <p className="card-title"> 1700 Calories Weight Loss Plan</p>
                            </div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetTransformed