import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap/'
import logo from '../../../img/new/logo.png'
import {
  NotificationsRounded,
  AccountCircle,
  CardMembership,
  EditRounded,
  HistoryRounded,
  SettingsApplicationsRounded,
  PolicyRounded,
  HelpOutlineRounded,
  GroupRounded,
  ExitToApp,
  CreditCard,
} from '@material-ui/icons'

import { getUser, removeUserSession } from '../../../utils/common'
import data from '../../../data'
const SweetNav = ({ other }) => {
  const user = getUser()
  const purple = {
    backgroundColor: '#652b9180',
  }
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        // bg={other ? purple : 'transparent'}
        style={
          other
            ? { backgroundColor: '#652b9180' }
            : { backgroundColor: 'transparent' }
        }
        variant='dark'
      >
        <Container className='justify-center'>
          <Navbar.Brand href='/#/home'>
            <img src={logo} alt='logo' className='w-30 h-12' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto md:ml-28'>
              <Nav.Link href='/#/home' className='md:ml-2 font-bold text-lg'>
                Home
              </Nav.Link>

              <Nav.Link
                href='/#/live-show'
                className='md:ml-4 font-bold text-lg'
              >
                Live Shows
              </Nav.Link>
              <Nav.Link href='/#/album' className='md:ml-4 font-bold text-lg'>
                Album
              </Nav.Link>
              <Nav.Link href='/#/new' className='md:ml-4 font-bold text-lg'>
                New
              </Nav.Link>
              <Nav.Link
                href='/#/favorites'
                className='md:ml-4 font-bold text-lg'
              >
                Favorites
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title={<NotificationsRounded className='text-3xl' />}
                size='lg'
                id='collasible-nav-dropdown'
                align='end'
              >
                {data.map((item) => {
                  return (
                    <NavDropdown.Item href='#'>
                      <div
                        key={item.id}
                        className='w-auto h-auto flex  align-middle mb-2 md:pr-24'
                      >
                        <img src={item.img} className='w-24 h-14' alt='item' />
                        <div className='ml-2' style={{ color: '#652b91' }}>
                          <p className='p-0  m-0 font-bold '>New Arrival </p>
                          <p className='p-0 m-0 font-bold'>{item.title} </p>
                          <p className='text-opacity-30 mt-0 mb-2'>
                            6 days ago.
                          </p>
                        </div>
                      </div>
                      <NavDropdown.Divider />
                    </NavDropdown.Item>
                  )
                })}

                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<AccountCircle className='text-3xl' />}
                size='lg'
                id='collasible-nav-dropdown'
                align='end'
              >
                <NavDropdown.Item href='/#/edit-profile'>
                  <div className='w-auto h-auto flex align-middle mb-2 nav_color'>
                    <img
                      src={logo}
                      className='w-10 h-10 rounded-full'
                      alt='item'
                    />
                    <div className='ml-3 mt-2'>
                      <p className='p-0  m-0 font-bold '>{user.name} </p>
                    </div>
                  </div>
                  <NavDropdown.Divider className='nav_color' />
                </NavDropdown.Item>
                <NavDropdown.Item href='/#/channel'>
                  <div className='w-auto h-auto flex align-middle mb-2 nav_color'>
                    <CreditCard />
                    <span className='ml-4'>Your channel</span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href='#'>
                  <div className='w-auto h-auto flex align-middle mb-2 nav_color'>
                    <CardMembership />
                    <span className='ml-4'> Paid membership</span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href='/#/edit-profile'>
                  <div className='w-auto h-auto flex align-middle mb-2 nav_color'>
                    <EditRounded />
                    <span className='ml-4'>Edit profile</span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href='/#/history'>
                  <div className='w-auto h-auto flex align-middle mb-2 nav_color'>
                    <HistoryRounded />
                    <span className='ml-4'>History</span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href='#'>
                  <div className='w-auto h-auto flex align-middle mb-2 nav_color'>
                    <SettingsApplicationsRounded />
                    <span className='ml-4'>Settings</span>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href='/#/terms/'>
                  <div className='w-auto h-auto flex align-middle mb-2 nav_color'>
                    <PolicyRounded />
                    <span className='ml-4'> Terms and privacy policy</span>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href='/#/help'>
                  <div className='w-auto h-auto flex align-middle mb-2 nav_color'>
                    <HelpOutlineRounded />
                    <span className='ml-4'>Help</span>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href='/#/signout'>
                  <div className='w-auto h-auto flex align-middle mb-2 nav_color'>
                    <ExitToApp />
                    <span className='ml-4'> Sign out</span>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link eventKey={2} href='#memes'>
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default SweetNav
