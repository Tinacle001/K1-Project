import React from 'react'
import Poster from '../Posters/Poster'
const Body = () => {
  return (
    <div>
      <Poster title={'Trend Now'} isLarge />
      <Poster title={'Continue Playing'} />
      <Poster title={'Recommended music videos'} />
      <Poster title={'New releases'} />
      <Poster title={'Live perfomances'} />
      <Poster title={'Oldies'} />
    </div>
  )
}

export default Body
