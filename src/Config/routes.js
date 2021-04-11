import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import SignUp from '../Pages/SignUp';
import LogIn from '../Pages/LogIn';
import Profile from '../Pages/Profile';
import Show from '../Pages/Show';

import { useRecoilValue } from 'recoil'
import { loggedInState } from "../recoil/selectors";

const Routes = () => {
  const loggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ LogIn } />
      <Route exact path='/signup' component={ SignUp } />
      { loggedIn && (
        <Route exact path='/profile' component={ Profile } />
      )}
      <Route path='/:id' component={ Show } />
      
    </Switch>
  )
}

export default Routes