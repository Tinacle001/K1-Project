import React, { useState } from 'react'
import './Body.css'
import phone from '../../img/phone.png'
import faq from '../faq'
const Body = () => {
  // const [faq, setFaq] = useState(initialState)
  return (
    <main className=''>
      <section className='section_one grid grid-cols-2 gap-4 '>
        <div className='section_one_content col-span-1'>
          <h3>Enjoy on your TV.</h3>
          <p>
            Watch on Smart TVs,Playstation,XBox, Chromecast, Apple TV, Blue-ray
            players, and more.
          </p>
        </div>
        <div className='section_one_img col-span-1'></div>
      </section>
      {/* end of section one */}
      <section className='section_two grid grid-cols-3 gap-3 '>
        <div className='section_two_img col-span-1 ml-36'>
          <img src={phone} alt='download-app' />
        </div>
        <div className='section_two_content col-span-2 ml-28'>
          <h3>Download your musics shows to watch offline.</h3>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </section>
      <section className='section_three '>
        <div className='section_three_content'>
          <h1 className='mb-20'>Top Live Videos</h1>
          <p className='section_three_text'>
            Discover videos and musics starring your favorite K1.
          </p>
          <form>
            <input
              type='email'
              className='section_three_input'
              placeholder='Email address'
            />
            <button className='section_three_btn'>Start Watching</button>
          </form>
          <p>Cancel anytime</p>
        </div>
      </section>
      {/* end of section three */}
      <section className='device '>
        <div className='device_content'>
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited music videos and LIVE shows on your phone, tablet,
            laptop, and TV.
          </p>
        </div>
        <div className='device_image grid md:grid-cols-3 gap-5 mx-auto'>
          <div className='col-span-1 mx-auto md:mt-20'>
            <div className='mobile mx-auto'></div>
            <p className='device_name text-center'>Mobile & Tablet</p>
            <p className='example_text'> Android</p>
            <p className='example_text'> Tablet</p>
          </div>
          <div className='col-span-1 mx-auto md:mt-10'>
            <div className='computer'></div>
            <div className='computer_line'></div>
            <p className='device_name text-center'>computer</p>
            <p className='example_text'> Chrome OS</p>
            <p className='example_text'> Window OS</p>
          </div>
          <div className='col-span-1 mx-auto'>
            <div className='tv'></div>
            <div className='tv_line mx-auto'></div>
            <p className='device_name text-center'>TV</p>
            <p className='example_text'> Chrome Cast</p>
          </div>
        </div>
      </section>
      {/* end of device section */}
      <section className='faq'>
        <div className='faq_container'>
          <h1>Frequently Asked Questions</h1>
          {faq.map((item) => {
            return (
              <div className='faq_item'>
                <p>{item.question}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Body
