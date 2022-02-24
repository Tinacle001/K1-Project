import React from 'react'
import image from '../../../img/1.jpg'
const AlbumCard = ({ title, date }) => {
  return (
    <div className='albumCard'>
      <img src={image} alt='album image' />
      <div className='albumCard-item'>
        <p className='album-title'>{title}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default AlbumCard
