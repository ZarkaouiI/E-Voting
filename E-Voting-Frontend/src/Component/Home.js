import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Row";
import {Link} from 'react-router-dom'

function Home() {
  
  const style = {
    alignItems : "center",
    justifyContent : "center"
  }

  return (
    <div
      className='container align-items-center justify-content-center' style={style}>
      <Container>
          <h1>Welcome to Electronic Voting System</h1>
        <Row>
          <Link to='/signup'>
            <Button
              className='mt-2 md'
              style={{ width: 100 }}
              variant='outline-success'
              type='submit'>
              SignUp
            </Button>
          </Link>
          <Link to='/login'>
            <Button
              className='mt-2 md'
              style={{ width: 100 }}
              variant='outline-success'
              type='submit'>
              Login
            </Button>
          </Link>
        </Row>
      </Container>
    </div>
  );
}

export default Home