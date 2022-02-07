import './App.css'
import LandingPage from './components/LandingPage'
import Signup from './components/Signup/Signup'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signin from './components/Signup/Signin'
import PageOne from './components/welcome/PageOne'
import Verify from './components/Verify'
import Payment from './components/Signup/Payment'
import Home from './components/Home/Home'
function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Routes>
            <Route exact path='/' element={<LandingPage />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            <Route exact path='/signin' element={<Signin />}></Route>
            <Route exact path='/welcome' element={<PageOne />}></Route>
            <Route exact path='/verify' element={<Verify />}></Route>
            <Route exact path='/payment' element={<Payment />}></Route>

            <Route exact path='/home' element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
