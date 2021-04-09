import React from 'react';

import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header () {
  const [user, setUser] = useRecoilState(userState);

  function login() {
    const dbUser = {
      username: 'max',
      password: 'password'
    };
    setUser(dbUser);
  }

  function logout() {
    setUser(null);
  }

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand><Link to={'/'}> QuizMe </Link></Navbar.Brand>
      <Nav className="justify-content-end">
        { user ? (
          <>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={ logout }>Log Out</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link as={Link} to='/' onClick={ login }>Log In</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </>
        ) }
      </Nav>
    </Navbar>
  )
  
}

export default Header;