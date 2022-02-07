import React from 'react'
import { Link } from 'react-router-dom'
import './Payment.css'
const payment = () => {
  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>Set up your payment</h1>
        <p>Your membership starts as soon as you set up payment.</p>
        <p>No commitments. Cancel online anytime</p>
        <p></p>
        <div className='payment_box'>
          <input
            type='text'
            className='payment_input'
            placeholder='adebola234@yahoo.com'
          />
          <input
            type='text'
            className='payment_input'
            placeholder='adebola234@yahoo.com'
          />
          <div className=''>
            <input
              type='text'
              className='payment_input'
              placeholder='adebola234@yahoo.com'
            />
            <input
              type='text'
              className='payment_input'
              placeholder='adebola234@yahoo.com'
            />
          </div>
          <p>Additional bank fees may apply.</p>
          <p>
            By checking the checkbox below, you agree to our Terms of Use,
            Privacy Statement. You may cancel at any time to avoid future
            charges.
          </p>
          <div className='extraone flex justify-between mb-3'>
            <label class='md:w-2/3 block text-gray-300 font-bold '>
              <input className='mr-2' type='checkbox' />
              <span className='text-gray-300 text-sm'>Remember Me</span>
            </label>
            <p>Need Help?</p>
          </div>
          <Link to='/welcome'>
            <button className='payment_btn'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default payment
