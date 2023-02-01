import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({user, isLoggIn}) {
  const [publicUrl, setPublicUrl] = useState("/lreact/");
  const navigate = useNavigate();
  console.log('isLoggIn header is ', isLoggIn);

  const handleLogout = () =>{
    localStorage.removeItem('loginData');
    navigate(`${publicUrl}`);
    window.location.href = publicUrl;
  }

  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Link to={`${publicUrl}`}>
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to={`${publicUrl}`}>
                  <Nav.Item className='text-white m-2'>Home</Nav.Item>
                </Link>
                {
                  isLoggIn &&  <Link to={`${publicUrl}projects`}>
                  <Nav.Item className='text-white m-2'>Projects</Nav.Item>
                </Link>
                }
               
                <Link to={`${publicUrl}contact`}>
                  <Nav.Item className='text-white m-2'>Contact</Nav.Item>
                </Link>
                <Link to={`${publicUrl}about`}>
                  <Nav.Item className='text-white m-2'>About</Nav.Item>
                </Link>
                {
                  !isLoggIn ?
                  <>
                    <Link to={`${publicUrl}login`}>
                      <Nav.Item className='text-white m-2'>Login</Nav.Item>
                    </Link>
                    <Link to={`${publicUrl}register`}>
                      <Nav.Item className='text-white m-2'>Register</Nav.Item>
                    </Link>
                  </>
                :
                  <Link to={`${publicUrl}logout`} onClick={handleLogout}>
                    {/* <p></p> */}
                    <Nav.Item className='text-white m-2'><sup>{user.name}</sup> Logout</Nav.Item>
                  </Link>
                }
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
    </>
  )
}
