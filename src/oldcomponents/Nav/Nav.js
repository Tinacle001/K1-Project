import React, { useState, useEffect } from 'react'
import './Nav.css'
import logo from '../../img/logo.png'
import { Search } from '@material-ui/icons'
import { SubscriptionsOutlined } from '@material-ui/icons'
const Nav = () => {
  const [displayNav, setDisplayNav] = useState(true)
  const [show, setShow] = useState(false)
  const handleDisplay = () => {
    if (displayNav) {
      setDisplayNav(false)
    } else {
      setDisplayNav(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <nav
      className={`bg-black flex justify-between items-center flex-wrap w-full p-2 small-nav ${
        show && 'nav_black'
      }`}
    >
      <div className='flex justify-between mx-4 my-2'>
        <img src={logo} alt='logo' width='30px' height='30px' />
        {/* </div> */}
        <div className='block lg:hidden'>
          <button
            className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
            onClick={handleDisplay}
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`'w-full text-center lg:flex lg:justify-between flex-grow  lg:items-center lg:w-auto' ${
          displayNav ? 'displayNav' : 'hideNav'
        } `}
      >
        {/* <div className='text-sm lg:flex-grow'> */}
        <a
          href='#responsive-header'
          className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 font-bold'
        >
          Docs
        </a>
        <a
          href='#responsive-header'
          className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 font-bold'
        >
          Examples
        </a>
        <a
          href='#responsive-header'
          className='block mt-4 lg:inline-block lg:mt-0 hover:text-white font-bold'
        >
          Blog
        </a>
        {/* </div> */}
        {/* <div className='flex'> */}
        <div className='flex subscribe rounded-full justify-between p-2 hover:w-96 m-4'>
          <Search className='' />
          <input
            type='text'
            className='search-text ml-2'
            placeholder='Search'
          />
        </div>
        <a
          href='#'
          class='inline-block text-sm px-4 py-2 leading-none border  text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 rounded-full'
        >
          <SubscriptionsOutlined />
          <span className='ml-2 uppercase'>Subscription Plan</span>
        </a>
        <a
          href='#'
          class='inline-block text-sm px-4 py-2 leading-none border  text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 ml-2 rounded-full uppercase'
        >
          Login
        </a>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Nav
