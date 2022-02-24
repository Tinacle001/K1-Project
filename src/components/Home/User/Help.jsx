import { CreditCard, HelpOutline, SearchRounded } from '@material-ui/icons'
import React from 'react'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import './styles.css'
const Help = () => {
  return (
    <>
      <SweetNav other />
      <div className='help'>
        <h1>Help</h1>
        <div className='searhBox'>
          <SearchRounded />
          <input type='search' placeholder='Search Help' />
        </div>
        <h3>Popular help resources</h3>
        <div className='help-item'>
          <CreditCard className='help-icon' />
          <p>Download music to listen offline</p>
        </div>
        <div className='help-item'>
          <CreditCard />
          <p>Cancel, pause, or resume your membership </p>
        </div>
        <div className='help-item'>
          <CreditCard />
          <p>Manage your membership</p>
        </div>
        <div className='help-item'>
          <CreditCard />
          <p>Download music </p>
        </div>
        <div className='help-item'>
          <CreditCard />
          <p>Is the mobile app of K1 Music Empire available on Apple store </p>
        </div>
        <div className='help-item'>
          <CreditCard />
          <p>How to live stream</p>
        </div>
        <div className='help-item'>
          <CreditCard />
          <p>Where to download the mobile app of K1 Music Empire</p>
        </div>
        <div className='help-item'>
          <CreditCard />
          <p>How to change profile picture and password</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Help
