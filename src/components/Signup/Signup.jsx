import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Signup.css'
import logo from '../../img/logo_new.png'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useForm } from 'react-hook-form'
import axios from './axios'
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const NUMBER_REGEX =
  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const REGISTER_URL = '/api/register'
const Signup = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [lastName, setLastName] = useState('')
  const [validLastName, setValidLastName] = useState(false)
  const [lastNameFocus, setlastNameFocus] = useState(false)

  const [phoneNum, setPhoneNum] = useState('')
  const [validPhoneNum, setValidPhoneNum] = useState(false)
  const [phoneNumFocus, setphoneNumFocus] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user))
  }, [user])
  useEffect(() => {
    setValidName(USER_REGEX.test(lastName))
  }, [lastName])

  useEffect(() => {
    setValidPhoneNum(NUMBER_REGEX.test(phoneNum))
  }, [phoneNum])
  useEffect(() => {
    setValidEmail(NUMBER_REGEX.test(email))
  }, [email])
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd))
    setValidMatch(pwd === matchPwd)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [user, lastName, phoneNum, email, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user)
    const v2 = USER_REGEX.test(lastName)
    const v3 = NUMBER_REGEX.test(phoneNum)
    const v4 = EMAIL_REGEX.test(email)
    const v5 = PWD_REGEX.test(pwd)
    if (!v1 || !v2 || !v3 || !v4 || !v5) {
      setErrMsg('Invalid Entry')
      return
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, lastName, email, phoneNum, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      console.log(response?.data)
      console.log(response?.accessToken)
      console.log(JSON.stringify(response))
      setSuccess(true)
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser('')
      setLastName('')
      setPhoneNum('')
      setEmail('')
      setPwd('')
      setMatchPwd('')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 409) {
        setErrMsg('User Taken')
      } else {
        setErrMsg('Registration Failed')
      }
      errRef.current.focus()
    }
  }

  // const [input, setInput] = useState({
  //   user: '',
  //   password: '',
  //   confirmPass: '',
  // })
  // const [number, setNumber] = useState()
  // const handleChange = (e) => {
  //   const value = e.target.value
  //   setInput({
  //     ...input,
  //     [e.target.name]: value,
  //   })
  // }
  /*const handleSubmit = (e) => {
    e.preventDefault()
    const { user, password, confirmPass } = input
    console.log(user, password, confirmPass)
    axios
      .post('http://localhost:5000/users/signin', { user, password })
      .then(({ data }) => {
        const { token, user } = data
        setUserSession(token, user)
        
        console.log(token, user)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  */
  return (
    <>
      <div className='signup'>
        <div className='logo pt-2 mx-12 flex justify-between '>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='signup_container'>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <div className='signup_box '>
            <p className='signup_text'>Create your account.</p>
            <form method='post' onSubmit={handleSubmit}>
              <input
                type='text'
                id='user'
                ref={userRef}
                autoComplete='off'
                value={user}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                name='user'
                className='signup_input leading-tight focus:outline-none focus:text-gray-500
                focus:bg-white focus:border-gray-500'
                placeholder='First Name'
              />
              <p
                id='uidnote'
                className={
                  userFocus && user && !validName ? 'instructions' : 'offscreen'
                }
              >
                {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              <input
                type='text'
                id='lastName'
                ref={userRef}
                autoComplete='off'
                value={user}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby='lastNamenote'
                onFocus={() => setlastNameFocus(true)}
                onBlur={() => setlastNameFocus(false)}
                name='lastname'
                className='signup_input leading-tight focus:outline-none focus:text-gray-500
                focus:bg-white focus:border-gray-500'
                placeholder='Last Name'
              />
              <p
                id='lastNamenote'
                className={
                  lastNameFocus && lastName && !validLastName
                    ? 'instructions'
                    : 'offscreen'
                }
              >
                {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              <input
                type='email'
                id='email'
                ref={userRef}
                autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby='emailnote'
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                name='email'
                className='signup_input leading-tight focus:outline-none focus:text-gray-500
                focus:bg-white focus:border-gray-500'
                placeholder='Email Address'
              />
              <p
                id='emailnote'
                className={
                  emailFocus && email && !validEmail
                    ? 'instructions'
                    : 'offscreen'
                }
              >
                {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                must be a real email address.
                <br />
                Must include @.
                <br />
                must include a domain name (e.g gmail.com).
              </p>

              <input
                type='tel'
                id='phoneNumber'
                ref={userRef}
                autoComplete='off'
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                required
                aria-invalid={validPhoneNum ? 'false' : 'true'}
                aria-describedby='phoneNumnote'
                onFocus={() => setphoneNumFocus(true)}
                onBlur={() => setphoneNumFocus(false)}
                name='phoneNum'
                className='signup_input leading-tight focus:outline-none focus:text-gray-500
                focus:bg-white focus:border-gray-500'
                placeholder='Phone Number'
              />
              <p
                id='phoneNumnote'
                className={
                  phoneNumFocus && phoneNum && !validPhoneNum
                    ? 'instructions'
                    : 'offscreen'
                }
              >
                {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                must be 10 to 11 numbers.
                <br />
                must be a correct number
              </p>

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
                value={number}
                onChange={setNumber}
                className='signup_input leading-tight bg-black
                focus:outline-none focus:text-gray-500 focus:border-gray-500'
              /> */}
              <input
                type='password'
                name='password'
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby='pwdnote'
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className='signup_input leading-tight focus:outline-none focus:text-gray-500
                focus:bg-white focus:border-gray-500'
                placeholder='Password'
              />
              <p
                id='pwdnote'
                className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{' '}
                <span aria-label='exclamation mark'>!</span>{' '}
                <span aria-label='at symbol'>@</span>{' '}
                <span aria-label='hashtag'>#</span>{' '}
                <span aria-label='dollar sign'>$</span>{' '}
                <span aria-label='percent'>%</span>
              </p>
              <input
                type='password'
                id='confirm_pwd'
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby='confirmnote'
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className='signup_input leading-tight focus:outline-none focus:text-gray-500
                focus:bg-white focus:border-gray-500'
                placeholder='Confirm Password'
              />
              <p
                id='confirmnote'
                className={
                  matchFocus && !validMatch ? 'instructions' : 'offscreen'
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
              {/* <Link to='/welcome'> */}
              <button
                className='signup_btn'
                disabled={
                  !validName ||
                  !validLastName ||
                  !validEmail ||
                  !validPhoneNum ||
                  !validPwd ||
                  !validMatch
                    ? true
                    : false
                }
              >
                Sign Up
              </button>

              {/* </Link> */}
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
