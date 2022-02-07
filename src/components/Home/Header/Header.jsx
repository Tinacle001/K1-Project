import React from 'react'
import './Header.css'
import logo from '../../../img/logo_new.png'
import { InfoRounded, PlayArrow } from '@material-ui/icons'

import { Link } from 'react-router-dom'
import SweetNav from '../Nav/SweetNav'
const Header = () => {
  return (
    <header clasName='home_header'>
      {/* <div className='pt-10 mx-3 md:mx-12 flex justify-between '>
        <img src={logo} alt='logo' />
        <Link to='/signin' className='header_sign_btn'>
          <button>Sign In</button>
        </Link>
      </div> */}
      <SweetNav />
      <div className='header_uo'>
        <div className='home_header_content'>
          <p className='home_header_text'>ADE ORI OKIN</p>

          <div className='top-10'>
            <div className='top-10-box'>
              <div className='box-text'>
                <span>TOP</span>
                <span>10</span>
              </div>
            </div>
            <div className='top_10_text'>#10 in Songs Today</div>
          </div>
          <div className='buttons'>
            <button className='play_btn'>
              <PlayArrow className='home_header_icon' fontSize='large' />
              <span className='ml-2'>Play</span>
            </button>
            <button className='info_btn'>
              <InfoRounded className='home_header_icon' fontSize='large' />
              <span className='ml-2'>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
