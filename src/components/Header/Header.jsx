import { ChevronRightRounded } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import logo from '../../img/logo_new.png'
const Header = () => {
  return (
    <header>
      <div className='nav mt-10 mx-12 flex justify-between '>
        <img src={logo} alt='logo' />
        <button className='signin_btn'>Sign In</button>
      </div>
      <div className='header_content'>
        <p className='header_text'>
          Watch k1 the Ultimate musics from Inception to date
        </p>
        <form>
          <input
            type='email'
            className='header_input'
            placeholder='Email address'
          />
          <button className='header_btn'>
            <span className='mr-4'>Get Started</span>
            <ChevronRightRounded className='header_icon' fontSize='large' />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
