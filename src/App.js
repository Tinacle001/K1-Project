import React, { useState, useEffect } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Signup from './components/Signup/Signup'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signin from './components/Signup/Signin'
import PageOne from './components/welcome/PageOne'
import Verify from './components/Verify'
import Payment from './components/Signup/Payment'
import Home from './components/Home/Home'
import NewPayment from './components/NewPayment'
import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'
import { getToken, removeUserSession, setUserSession } from './utils/common'
import axios from 'axios'
import LiveShow from './components/Home/User/LiveShow'
import LiveStream from './components/Home/User/LiveStream'
import NoLiveStream from './components/Home/User/NoLiveStream'
import Album from './components/Home/User/Album'
import New from './components/Home/User/New'
import Favorites from './components/Home/User/Favorites'
import Channels from './components/Home/User/Channels'
import EditProfile from './components/Home/User/EditProfile'
import History from './components/Home/User/History'
import TermsPrivacy from './components/Home/User/TermsPrivacy'
import Help from './components/Home/User/Help'
import Signout from './components/Home/User/Signout'
import DeviceActivation from './components/Home/User/DeviceActivation'
import DeviceStreaming from './components/Home/User/DeviceStreaming'
import ManageDevice from './components/Home/User/ManageDevice'
const url = 'http://localhost:5000/verifyToken?token='
function App() {
  return (
    <>
      {/* <FlutterPayment /> */}
      <Router>
        <div className='app'>
          <Routes>
            <Route exact path='/' element={<LandingPage />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            {/* <Route exact path='/signin' element={<PublicRoute />}></Route> */}
            <Route exact path='/signin' element={<PublicRoute />}>
              <Route exact path='/signin' element={<Signin />} />
            </Route>
            <Route exact path='/welcome' element={<PageOne />}></Route>
            <Route exact path='/verify' element={<Verify />}></Route>
            <Route exact path='/payment' element={<Payment />}></Route>

            <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/home' element={<Home />} />
            </Route>
            <Route exact path='/live-show' element={<PrivateRoute />}>
              <Route exact path='/live-show' element={<LiveShow />} />
            </Route>
            <Route exact path='/live-stream' element={<PrivateRoute />}>
              <Route exact path='/live-stream' element={<LiveStream />} />
            </Route>
            <Route exact path='/no-live-stream' element={<PrivateRoute />}>
              <Route exact path='/no-live-stream' element={<NoLiveStream />} />
            </Route>
            <Route exact path='/album' element={<PrivateRoute />}>
              <Route exact path='/album' element={<Album />} />
            </Route>
            <Route exact path='/new' element={<PrivateRoute />}>
              <Route exact path='/new' element={<New />} />
            </Route>
            <Route exact path='/favorites' element={<PrivateRoute />}>
              <Route exact path='/favorites' element={<Favorites />} />
            </Route>
            <Route exact path='/channel' element={<PrivateRoute />}>
              <Route exact path='/channel' element={<Channels />} />
            </Route>
            <Route exact path='/edit-profile' element={<PrivateRoute />}>
              <Route exact path='/edit-profile' element={<EditProfile />} />
            </Route>
            <Route exact path='/history' element={<PrivateRoute />}>
              <Route exact path='/history' element={<History />} />
            </Route>
            <Route exact path='/terms' element={<PrivateRoute />}>
              <Route exact path='/terms' element={<TermsPrivacy />} />
            </Route>
            <Route exact path='/help' element={<PrivateRoute />}>
              <Route exact path='/help' element={<Help />} />
            </Route>
            <Route exact path='/signout' element={<PrivateRoute />}>
              <Route exact path='/signout' element={<Signout />} />
            </Route>
            <Route exact path='/device-activation' element={<PrivateRoute />}>
              <Route
                exact
                path='/device-activation'
                element={<DeviceActivation />}
              />
            </Route>
            <Route exact path='/device-streaming' element={<PrivateRoute />}>
              <Route
                exact
                path='/device-streaming'
                element={<DeviceStreaming />}
              />
            </Route>
            <Route exact path='/manage-device' element={<PrivateRoute />}>
              <Route exact path='/manage-device' element={<ManageDevice />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
