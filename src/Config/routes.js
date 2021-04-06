import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Profile from '../Pages/Profile';

import { useRecoilValue } from 'recoil'
import { loggedInState } from "../recoil/selectors";

const Routes = () => {
  const loggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      { loggedIn && (
        <Switch>
          <Route exact path='/profile' component={ Profile } />
        </Switch>
      )}
    </Switch>
  )
}

export default Routes