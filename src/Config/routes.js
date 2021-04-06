import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Profile from '../Pages/Profile';

import { useRecoilValue } from 'recoil'
// import { loggedInState } from "../recoil/selectors";

const Routes = () => {
  // get the user state with useRecoilValue
  // const user = useRecoilValue(userState);
  // change the variable to loggedIn
  // const loggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/profile' component={ Profile } />
    </Switch>
  )
}

export default Routes