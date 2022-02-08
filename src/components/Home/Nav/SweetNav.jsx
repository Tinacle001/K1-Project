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
import logo from '../../../img/logo_new.png'
import { NotificationsRounded } from '@material-ui/icons'

const SweetNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='transparent' variant='dark'>
        <Container className='justify-center'>
          <Navbar.Brand href='/'>
            <img src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='#'>Live Shows</Nav.Link>
              <Nav.Link href='/signin'>Album</Nav.Link>
              <Nav.Link href='/signin'>New</Nav.Link>
              <Nav.Link href='/signin'>Favorites</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title={<NotificationsRounded />}
                id='collasible-nav-dropdown'
              >
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
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
