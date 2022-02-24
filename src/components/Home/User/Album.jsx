import React from 'react'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import AlbumCard from './AlbumCard'
import './styles.css'
const Album = ({ img, title, date }) => {
  return (
    <div>
      <SweetNav other />
      <div className='album'>
        <h3>K1 De Ultimate / Albums</h3>
        <div class='album-item md:grid md:grid-cols-3 gap-4 '>
          <div class='md:last:col-span-1'>
            <AlbumCard title='Let the music Flow, Vol. 2' date='2018' />
          </div>
          <div class='md:last:col-span-1'>
            <AlbumCard title='Let the music Flow, Vol. 2' date='2018' />
          </div>
          <div class='md:last:col-span-1'>
            <AlbumCard title='Let the music Flow, Vol. 2' date='2018' />
          </div>
          <div class='md:last:col-span-1'>
            <AlbumCard title='My Dear' date='2017' />
          </div>
          <div class='md:last:col-span-1'>
            <AlbumCard title='My Dear' date='2017' />
          </div>
          <div class='md:last:col-span-1'>
            <AlbumCard title='My Dear' date='2017' />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Album
