import React from 'react'
import SweetNav from '../Nav/SweetNav'
import Footer from '../../Footer/Footer'
import './styles.css'
import streaming from './streaming'
const ManageDevice = () => {
  return (
    <>
      <SweetNav other />
      <div className='manage-device'>
        <h1>Manage all devices </h1>
        <p>Remove device below</p>
        <div className='streaming-line'></div>
        <div className='devices-container'>
          {streaming.map((device) => (
            <div className='device-name'>
              <div className=''>
                <p>{device.name}</p>
                <div className='device-name-line'></div>
              </div>
              <button>Signout</button>
            </div>
          ))}
        </div>
        <button className='manage-device-btn'>Done</button>
      </div>
      <Footer />
    </>
  )
}

export default ManageDevice
