import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Signup.css'
import logo from '../../img/logo_new.png'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useForm } from 'react-hook-form'
const Signup = () => {
  const { control, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  const [value, setValue] = useState()
  return (
    <>
      <div className='signup'>
        <div className='logo pt-2 mx-12 flex justify-between '>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='signup_container'>
          <div className='signup_box '>
            <p className='signup_text'>Create your account.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type='text'
                className='signup_input leading-tight focus:outline-none focus:text-gray-500
                focus:bg-white focus:border-gray-500'
                placeholder='adebola234@yahoo.com'
              />
              {/* <PhoneInputWithCountry
                country='US'
                name='phoneInputWithCountrySelect'
                control={control}
                rules={{ required: true }}
                className='signup_input'
              /> */}
              {/* <PhoneInput
                defaultCountry='US'
                placeholder='Enter phone number'
                value={value}
                onChange={setValue}
                className='signup_input leading-tight bg-black
                focus:outline-none focus:text-gray-500 focus:border-gray-500'
              /> */}
              <input
                type='password'
                className='signup_input leading-tight focus:outline-none focus:text-gray-500
                focus:bg-white focus:border-gray-500'
                placeholder='password'
              />
              <input
                type='password'
                className='signup_input leading-tight focus:outline-none focus:text-gray-500
                focus:bg-white focus:border-gray-500'
                placeholder='confirm password'
              />
              <Link to='/welcome'>
                <button className='signup_btn'>Sign Up</button>
              </Link>
            </form>
          </div>
          {/* end signup box */}
          <div className='extra'>
            <div className='extraone flex justify-between mb-3'>
              <label class='md:w-2/3 block text-gray-300 font-bold '>
                <input className='mr-2' type='checkbox' />
                <span className='text-gray-300 text-sm'>Remember Me</span>
              </label>
              <p>Need Help?</p>
            </div>
            <div className='extratwo flex justify-between'>
              <p className='text-gray-300'>Already have an account?</p>
              <Link to='/signin'>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup
