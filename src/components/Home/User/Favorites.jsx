import React from 'react'
import liveShowImg from '../../../img/new/awade.jpeg'
import './styles.css'
import Poster from '../Posters/Poster'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const live = true
  return (
    <>
      <SweetNav other />
      <div className='new' style={{ backgroundColor: '#652b91' }}>
        <Poster isLarge />
        <Poster isLarge />
      </div>
      <Footer />
    </>
  )
}

export default Favorites
