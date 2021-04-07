import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import SignUp from '../Pages/SignUp';

import { useRecoilValue } from 'recoil'
import { loggedInState } from "../recoil/selectors";

const Routes = () => {
  const loggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/signup' component={ SignUp } />
      { loggedIn && (
        <Switch>
          <Route exact path='/profile' component={ Profile } />
        </Switch>
      )}
    </Switch>
  )
}

export default Routes