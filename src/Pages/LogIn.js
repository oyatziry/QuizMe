import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import AuthModel from '../models/auth';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';

function LogIn(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useRecoilState(userState);

  function handleSubmit(event){
    event.preventDefault();

    AuthModel.find({'username': username}).then((userData) => {
      console.log(userData);
      setUser(userData.user.name);
      props.history.push('/profile');
    })
  }

  return (
    <Container>
      <Form onSubmit={ handleSubmit }>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Username" 
            onChange={ (e) => setUsername(e.target.value) }
            value={username}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={ (e) => setPassword(e.target.value) }
            value={password}
          />
        </Form.Group>

        <input type="submit" value="Submit"></input>
      </Form>
    </Container>
  );
}

export default LogIn;