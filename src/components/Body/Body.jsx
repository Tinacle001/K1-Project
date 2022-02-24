import React, { useState } from 'react'
import './Body.css'
import phone from '../../img/phone.png'
import faq from '../faq'
import ayinde from '../../img/ayinde.jpg'
import googleplay from '../../img/googleplay.png'
import appstore from '../../img/appstore.png'
import { Link } from 'react-router-dom'
import {
  Add,
  AddCircleOutlined,
  Close,
  PlusOneOutlined,
} from '@material-ui/icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
const Body = () => {
  const [openFaq, setOpenFaq] = useState(false)
  const [num, setNum] = useState(0)
  const handleOpen = (id) => {
    console.log(id)
    setNum(id)
    if (openFaq) {
      setOpenFaq(false)
    } else {
      setOpenFaq(true)
    }
  }
  return (
    <main className=''>
      <section className='section_one md:grid   md:grid-cols-2 md:gap-4 '>
        <div className='section_one_content md:col-span-1'>
          <h3 className='text-center'>Enjoy on your TV.</h3>
          <p className='text-center md:text-justify'>
            Watch on Smart TVs,Playstation,XBox, Chromecast, Apple TV, Blue-ray
            players, and more.
          </p>
        </div>
        <div className='section_one_img_cont md:col-span-1'>
          <div className='section_one_img hidden md:block'></div>
          <img
            src={ayinde}
            className='section_one_img block md:hidden'
            alt=''
          />
        </div>
      </section>
      {/* end of section one */}
      <section className='section_two md:grid md:grid-cols-3 gap-3 '>
        <div className='section_two_img md:col-span-1 md:ml-36'>
          <img src={phone} alt='download-app' className='phone_img' />
        </div>
        <div className='section_two_content md:col-span-2 md:ml-28'>
          <div className='play-img-container'>
            <img
              src={googleplay}
              className='googleplay-img'
              alt='googlepay logo'
            />
            <img
              src={appstore}
              className='googleplay-img'
              alt='appstore logo'
            />
          </div>

          <h3>Download your musics shows to watch offline.</h3>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </section>
      {/* end of section two */}
      <section className='section_three '>
        <div className='section_three_content'>
          <h1 className='md:mb-15'>Top Live Videos</h1>
          <p className='section_three_text'>
            Discover videos and musics starring your favorite K1.
          </p>
          <form className='section_three_form'>
            <input
              type='email'
              className='section_three_input'
              placeholder='Email address'
            />
            <Link to='/signup'>
              <button className='section_three_btn'>Start Watching</button>
            </Link>
          </form>
          <p className='mb-12'>Cancel anytime</p>
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
        <div className='device_image grid md:grid-cols-3 md:gap-5 mx-auto'>
          <div className='md:col-span-1 mx-auto md:mt-20'>
            <div className='mobile mx-auto'></div>
            <p className='device_name text-center'>Mobile & Tablet</p>
            <p className='example_text'> Android</p>
            <p className='example_text'> Tablet</p>
          </div>
          <div className='md:col-span-1 mx-auto md:mt-10'>
            <div className='computer'></div>
            <div className='computer_line'></div>
            <p className='device_name text-center'>computer</p>
            <p className='example_text'> Chrome OS</p>
            <p className='example_text'> Window OS</p>
          </div>
          <div className='md:col-span-1 mx-auto'>
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
              <div className='faq_items'>
                <div className='faq_item'>
                  <p>{item.question}</p>
                  <button onClick={() => handleOpen(item.id)}>
                    {openFaq && num === item.id ? <Close /> : <Add />}
                  </button>
                </div>
                {openFaq && num === item.id && (
                  <p className='faq-answer'>{item.answer} </p>
                )}
              </div>
            )
          })}
        </div>
      </section>
      <div className='play-img-container mt-10'>
        <img src={googleplay} className='googleplay-img' alt='googlepay logo' />
        <img src={appstore} className='googleplay-img' alt='appstore logo' />
      </div>
    </main>
  )
}

export default Body
