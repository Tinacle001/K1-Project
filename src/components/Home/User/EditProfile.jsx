import React from 'react'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import './styles.css'
import liveShowImg from '../../../img/new/awade.jpeg'
import { getUser } from '../../../utils/common'

const EditProfile = () => {
  const user = getUser()
  let name = user.name
  let firstName = name.split(' ')[0]
  let lastName = name.split(' ')[1]
  console.log(user)
  return (
    <>
      <SweetNav other />
      <section className='editProfile'>
        <div className='editProfileTop'>
          <div className='editProfilebuttonsContainer'>
            <h1>Edit profile</h1>
            <div className='editProfilebuttons'>
              <button>Cancel</button>
              <button>Done</button>
            </div>
          </div>
          <div className='editProfileLine'></div>
        </div>
        <div className='editProfileform'>
          <img
            src={liveShowImg}
            className='rounded-full w-20 h-20 mb-7'
            alt='profile picture'
          />
          <form className='w-full max-w-lg'>
            <button className='change-btn'>Change</button>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-first-name'
                >
                  First Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  id='grid-first-name'
                  type='text'
                  value={firstName}
                  placeholder='Jane'
                />
                {/* <p className='text-red-500 text-xs italic'>
                  Please fill out this field.
                </p> */}
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-last-name'
                >
                  Last Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-last-name'
                  type='text'
                  value={lastName}
                  placeholder='Doe'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-password'
                >
                  Phone Number
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-password'
                  type='text'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-2'>
              <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-state'
                >
                  Gender
                </label>
                <div className='relative'>
                  <select
                    className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-state'
                  >
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-password'
                >
                  Location
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-password'
                  type='text'
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default EditProfile
