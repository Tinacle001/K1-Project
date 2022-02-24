import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from '../Footer/Footer'
import { getToken, removeUserSession, setUserSession } from '../../utils/common'
import axios from 'axios'
// import Poster from './Posters/Poster'
const Home = () => {
  const [authLoading, setAuthLoading] = useState(true)
  useEffect(() => {
    const token = getToken()
    if (!token) {
      return
    }
    axios
      .get(`http://localhost:5000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user)
        setAuthLoading(false)
      })
      .catch((error) => {
        removeUserSession()
        setAuthLoading(false)
      })
  }, [])
  if (authLoading && getToken) {
    return <p>Checking Authentication...</p>
  }
  return (
    <div>
      <Header />
      <Body />
      {/* <Poster /> */}
      <Footer />
    </div>
  )
}

export default Home
