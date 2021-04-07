import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userState } from '../recoil/atoms';

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event){
    event.preventDefault();

  }

  return (
    <Container>
      <Form onSubmit={ handleSubmit }>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Name" 
            onChange={ (e) => setName(e.target.value) }
            value={name}
          />
        </Form.Group>

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

        <Form.Group controlId="formBasicPasswordConf">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
        <input type="submit" value="Submit"></input>
      </Form>
    </Container>
  )
}

export default SignUp;