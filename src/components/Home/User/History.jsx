import React from 'react'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import './styles.css'
import liveShowImg from '../../../img/new/awade.jpeg'

const History = () => {
  return (
    <>
      <SweetNav other />
      <section className='history'>
        <h1>History</h1>
        <p>Once you listen to something it will show up here.</p>
      </section>
      <Footer />
    </>
  )
}

export default History
