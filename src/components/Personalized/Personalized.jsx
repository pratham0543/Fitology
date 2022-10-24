import React from 'react'
import { useState } from 'react';
import './personalized.css'



const Personalized = () => {
  

const [message,setMessage]=useState("");


  const onClickHandler=(e)=>
  {
    e.preventDefault();
    document.querySelector('.person-form').reset();
    setMessage("Success! We will contact you shortly!")
    
  }

  return (
    <div className="container-fluid contact-div mt-5 mb-5">
      <h1 className='text-center'>Get Personalized Plan</h1>
      <form className='person-form' onSubmit={onClickHandler}>
        <div className="row mt-3">
          <div className="col-6">
            <label htmlFor="First Name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="First Name" placeholder="John" required />
          </div>
          <div className="col-6">
            <label htmlFor="Last Name" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="Last Name" placeholder="Doe" required />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label htmlFor="email" class="form-label">Email</label>
            <input type="Email" class="form-control" id="email" placeholder="abc@example.com" required />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label class="form-label">Goal</label>
            <select className="form-select" aria-label="Default select example">
              <option value="1">Weight Gain/Muscle Gain</option>
              <option value="2">Maintain Weight</option>
              <option value="3">Weight loss</option>
            </select>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label htmlFor="num" class="form-label">Whatsapp Number</label>
            <input type="number" class="form-control" id="email" placeholder="your number" required />
          </div>
        </div>
        <button type="submit" className='btn btn-dark mt-3'>Get Plan</button>
      </form>
      <div className="row mt-3">
        <p className='text-success text-center'>{message}</p>
      </div>
    </div>
  )
}

export default Personalized