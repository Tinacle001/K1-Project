import React from 'react'
import liveShowImg from '../../../img/new/awade.jpeg'
import './styles.css'
import Poster from '../Posters/Poster'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import { Link } from 'react-router-dom'

const LiveShow = () => {
  const live = true
  return (
    <>
      <SweetNav other />
      <section className='liveShow mb-4'>
        <section className='liveshow-img'>
          <img src={liveShowImg} alt='awade' className='h-44 w-44' />
        </section>
        <section>
          <h1>Coronation of Oba Oniru - Eko Hotels</h1>
          <p>3.7k Watching</p>
          <Link to={live ? '/live-stream' : '/no-live-stream'}>
            <button className='live_btn'>LIVE NOW</button>
          </Link>
        </section>
      </section>
      <Poster title={'Recommended music videos'} />
      <Footer />
    </>
  )
}

export default LiveShow
