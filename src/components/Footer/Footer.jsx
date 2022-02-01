import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <article className='footer_content grid md:grid-cols-4 gap-5'>
        <div className='col-span-1'>
          <ul className='mt-24'>
            <li>Questions? Contact us.</li>
            <li>FAQ</li>
            <li>Speed Test</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <ul className='mt-24'>
            <br />
            <li>Help Center</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <ul className='mt-24'>
            <br />
            <li>Account</li>
            <li>Way to Watch</li>
            <li>Only on K1</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <ul className='mt-24'>
            <li></li>
            <br />
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p className='text'>K1 The Ultimate Music Empire 2022</p>
      </article>
    </footer>
  )
}

export default Footer
