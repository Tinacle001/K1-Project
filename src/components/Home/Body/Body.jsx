import React from 'react'

import Poster from '../Posters/Poster'
import './Body.css'
const Body = () => {
  return (
    <div className='home_body'>
      <Poster title={'Trending Now'} isLarge />
      <Poster title={'Continue Playing'} />
      <Poster title={'Recommended music videos'} />
      <Poster title={'New releases'} />
      <Poster title={'Live perfomances'} />
      <Poster title={'Oldies'} />
    </div>
  )
}

export default Body
