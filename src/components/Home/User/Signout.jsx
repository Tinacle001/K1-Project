import React from 'react'
import './styles.css'
import { getUser, removeUserSession } from '../../../utils/common'
import SweetNav from '../Nav/SweetNav'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Signout = () => {
  const navigate = useNavigate()
  const user = getUser()
  const handleLogout = () => {
    removeUserSession()
    navigate('/signin')
  }
  return (
    <>
      <SweetNav other />
      <div className='signout'>
        <div className='signoutBox'>
          <h2>Leaving So Soon?</h2>
          <p>
            Just so you know, you don’t always need to sign out of K1 Music
            Empire. It’s only necessary if you’re on shared device or public
            computer.
          </p>
          <p>
            You’ll be redirected to the K1 Music Empire website in 20 seconds
          </p>
          <button onClick={handleLogout} className='signoutButton'>
            Go Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signout
