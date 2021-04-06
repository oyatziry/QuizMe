import React from 'react';
import { Link } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';

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
    <header>
      <div className='logo'>
        <Link to={'/'}> QuizMe </Link>
      </div>
      <div className='links'>
        <ul>
          { user ? (
            <>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li onClick={ logout }>Log Out</li>
            </>
          ) : (
            <li onClick={ login }>Log In</li>
          )}
        </ul>
      </div>
    </header>
  )
  
}

export default Header;