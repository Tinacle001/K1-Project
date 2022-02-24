import React from 'react'
import SweetNav from '../Nav/SweetNav'
import Footer from '../../Footer/Footer'
const DeviceActivation = () => {
  return (
    <>
      <SweetNav other />
      <div className='device_activation'>
        <h1>Activate Your Device</h1>
        <input type='text' placeholder='Enter Code' /> <br />
        <button>Activate</button>
        <div className='steps'>
          <div className='stepone'>
            <p>step one</p>
            <span>
              Follow the instructions on your device to get an activation code.
            </span>
          </div>
          <div className='steptwo'>
            <p>step two</p>
            <span>
              Your computer and device must both be connected to the internet to
              activate.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DeviceActivation
