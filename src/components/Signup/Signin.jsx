import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo_new.png'
import './Signup.css'
import Footer from '../Footer/Footer'
import { setUserSession } from '../../utils/common'
import axios from './axios'

import { useNavigate } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap/'
const url = 'https://k1-backend.herokuapp.com/api/login'

// const offUrl = '/users/signin'
const offUrl = '/api/login'

const Signin = (props) => {
  const errRef = useRef()
  const navigate = useNavigate()
  const [isError, setIsError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  // const handleChange = (e) => {
  //   setEmail(e.target.value)
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    // setisError to null
    // setIsLoading to true
    // fetch the the api using axios.post and pass in the url and the object posting as argument
    //  use .then and get the response
    // set the response to the setUserSession
    // setUserSession is waiting for token and the user object
    // redirect user to the home page with navigate method
    setIsError(null)
    setIsLoading(true)
    // const makeAPICall = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8080/', { mode: 'cors' })
    //     const data = await response.json()
    //     console.log({ data })
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
    axios
      .post(
        offUrl,
        // {
        //   username: email,
        //   password: password,
        // }
        {
          email,
          password,
        }
        // {
        //   headers: { 'Content-Type': 'application/json' },

        //   withCredentials: true,
        // },
        // { mode: 'cors' }
      )
      .then((response) => {
        console.log(response)
        setUserSession(response.data.token, response.data.user)
        setIsLoading(false)
        navigate('/home')
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg('No Server Response')
        } else if (err.response?.status === 409) {
          setErrMsg('User Taken')
        } else {
          setErrMsg('Email or password is not correct')
        }
        errRef.current.focus()
        console.error(err)
        setIsLoading(false)
      })
  }
  return (
    <>
      <div className='signup signin'>
        <div className='logo pt-2 mx-12 flex justify-between '>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='signup_container'>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg text-center' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <div className='signup_box '>
            <p className='signup_text mb-7 text-center'>
              Sign In to K1 MUSIC EMPIRE.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                className='signup_input'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email address'
              />
              <input
                type='password'
                className='signup_input'
                placeholder='choose password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <Link to='/welcome'> */}
              {!isLoading ? (
                <button disabled={isLoading} className='signup_btn'>
                  Sign In
                </button>
              ) : (
                <Button className='signup_btn' disabled={isLoading}>
                  <Spinner
                    as='span'
                    animation='grow'
                    size='sm'
                    role='status'
                    aria-hidden='true'
                  />
                  Loading...
                </Button>
              )}
              {/* </Link> */}
            </form>
          </div>
          {/* end signup box */}

          <div className='extra'>
            <div className='extraone flex justify-between mb-6'>
              <label class='md:w-2/3 block text-gray-500 font-bold'>
                <input className='mr-2' type='checkbox' />
                <span className='text-sm captcha'>Remember Me</span>
              </label>
              <p className='captcha'>Need Help?</p>
            </div>
            <div className='extratwo flex justify-between mb-4'>
              <p className='text-gray-500 captcha'>New to K1 Music Empire?</p>
              <Link to='/signup'>
                <button>Sign Up</button>
              </Link>
            </div>
            <p className='captcha'>
              This page is protected by Google reCAPTCHA to ensure you’re not a
              bot. Learn more.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signin
