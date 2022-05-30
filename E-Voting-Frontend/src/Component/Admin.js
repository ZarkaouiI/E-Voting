import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

function Admin() {
  return (
    <Container className='align-items-center justify-content-center'>
      <Row>
        <Col>
          <Link to='/addparty'>
            <Button
              className='mt-2 md'
              style={{ width: "100%" }}
              variant='outline-success'
              type='submit'>
              Add Party Details
            </Button>
          </Link>
        </Col>
        <Link to='/addcandidate'>
          <Button
            className='mt-2 md'
            style={{ width: "100%" }}
            variant='outline-primary'
            type='submit'>
            Add Candidate Details
          </Button>
        </Link>
      </Row>
      <Row>
        <Link to='/addelection'>
          <Button
            className='mt-2'
            style={{ width: "100%" }}
            variant='outline-primary'
            type='submit'>
            Add Election
          </Button>
        </Link>
      </Row>
      <Row>
        <Link to='/pending'>
          <Button
            className='mt-2'
            style={{ width: "100%" }}
            variant='outline-danger'
            type='submit'>
            Accept/Reject Pending Request
          </Button>
        </Link>
        <Link to='/result'>
          <Button
            className='mt-2'
            style={{ width: "100%" }}
            variant='outline-danger'
            type='submit'>
            View/Declare Result
          </Button>
        </Link>
      </Row>
    </Container>
  );
}

export default Admin;
