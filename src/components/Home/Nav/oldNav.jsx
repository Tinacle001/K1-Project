import React from 'react'
import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'
import logo from '../../../img/logo_new.png'

const props = {
  items: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Doc',
      link: '#docs',
    },
    {
      text: 'Custom',
      link: '#custom-bar',
    },
    {
      text: 'Contact',
      link: '#contact',
    },
  ],
  logo: {
    img: logo,
  },
  style: {
    barStyles: {
      background: 'transparent',
      border: 'none',
      display: 'flex',
      
    },
    linkStyles: {
      color: 'white',
    },
    logoStyles: {
      fontSize: '20px',
      color: 'white',
    },
    sidebarStyles: {
      background: '#222',
      buttonColor: 'white',
    },
  },
}
const Nav = () => {
  return (
    <div>
      <Navbar {...props} />
    </div>
  )
}

export default Nav
