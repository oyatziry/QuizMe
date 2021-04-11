import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';

import './Profile.scss';
import Container from 'react-bootstrap/Container';

function Profile() {
  const [user] = useRecoilState(userState);

  return (
    <div>
      <Container>
        <h3> Welcome {user.charAt(0).toUpperCase() + user.slice(1)}! </h3>
      </Container>
    </div>
  )
}

export default Profile;