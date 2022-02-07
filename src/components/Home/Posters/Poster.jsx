import React from 'react'
import './Poster.css'
import data from './data'
const Poster = ({ title, isLarge }) => {
  console.log(title)
  return (
    <div className='row'>
      <h2 className='text-2xl title'>{title}</h2>
      <div className='posters'>
        {data.map((item) => (
          <>
            <img
              src={item.img}
              alt=''
              className={isLarge ? 'large-row-poster' : 'row-poster'}
            />
          </>
        ))}
      </div>
    </div>
  )
}

export default Poster
