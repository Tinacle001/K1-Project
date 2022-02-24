import React from 'react'
import SweetNav from '../Nav/SweetNav'
import Footer from '../../Footer/Footer'
import './styles.css'
import streaming from './streaming'
const DeviceStreaming = () => {
  return (
    <>
      <SweetNav other />
      <div className='device_activation'>
        <h1>Recent device streaming activity</h1>
        <p>The most recently used device and locations on your account.</p>
        <div className='streaming-line'></div>
        {streaming.map((item) => {
          return (
            <>
              <div className='streaming'>
                <p className='streaming-device'>{item.name}</p>
                {item.info.map((info) => {
                  console.log(info)
                  return (
                    <div className='space'>
                      <p className='ipAddress'>{info.address}</p>
                      <p className='date'>{info.date}</p>
                    </div>
                  )
                })}
              </div>
              <div className='streaming-line'></div>
            </>
          )
        })}

        <button>Done</button>
      </div>
      <Footer />
    </>
  )
}

export default DeviceStreaming
