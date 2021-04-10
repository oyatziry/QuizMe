import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function LogIn(){
  // find user by username on db
  // set user to state using useState and useEffect
  
  return (
    <Container>
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
    </Container>
  );
}

export default LogIn;