import React from 'react'
import liveShowImg from '../../../img/new/awade.jpeg'
import './styles.css'
import Poster from '../Posters/Poster'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import { Link } from 'react-router-dom'
import { getUser } from '../../../utils/common'

const Channels = () => {
  const live = true
  const user = getUser()
  return (
    <>
      <SweetNav other />
      <div
        className='flex align-middle p-4'
        style={{ backgroundColor: '#652b91' }}
      >
        <img
          src={liveShowImg}
          className='rounded-full w-28 h-28 md:w-36 md:h-36'
          alt='user image'
        />
        <h2 className='mt-10 md:mt-14 ml-8'>{user.name}</h2>
      </div>
      <div className='new pt-8' style={{ backgroundColor: '#652b91' }}>
        <h3 className='ml-4'>My Channel</h3>
        <Poster isLarge />
        <Poster isLarge />
      </div>
      <Footer />
    </>
  )
}

export default Channels
