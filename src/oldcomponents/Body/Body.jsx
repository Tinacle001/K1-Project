import React from 'react'
import './Body.css'
import data from '../../data'
const Body = ({ title, isLarge }) => {
  return (
    <div className='row'>
      <h2 className='text-2xl'>{title}</h2>
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

export default Body
