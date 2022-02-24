import React from 'react'
import liveShowImg from '../../../img/new/awade.jpeg'
import './styles.css'
import Poster from '../Posters/Poster'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import { Link } from 'react-router-dom'

const New = () => {
  const live = true
  return (
    <>
      <SweetNav other />
      <div className='new' style={{ backgroundColor: '#652b91' }}>
        <Poster title={'New on K1 Music Empire'} isLarge />
        <Poster title={'Top 4 on K1 Music Empire'} isLarge />
      </div>
      <Footer />
    </>
  )
}

export default New
