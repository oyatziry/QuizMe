import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import AuthModel from '../models/auth';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';

function LogIn(){
  const [user, setUser] = useRecoilState(userState);

  // function fetchUser(username){
  //   AuthModel.find(username).then((data) => {
  //     console.log(data);
  //   })
  // }

  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <Container>
      <Form onSubmit={ handleSubmit }>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Username" 
            // onChange={ (e) => setUsername(e.target.value) }
            // value={username}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            // onChange={ (e) => setPassword(e.target.value) }
            // value={password}
          />
        </Form.Group>

        <input type="submit" value="Submit"></input>
      </Form>
    </Container>
  );
}

export default LogIn;