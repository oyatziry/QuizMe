import React from 'react';

import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';

function Profile() {
  const [user] = useRecoilState(userState);

  return (
    <div>
      <h1> This is the Profile Page </h1>
      <h3> Hello, welcome back {user}! </h3>
    </div>
  )
}

export default Profile;