import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import useAuth from '../Hooks/useAuth'

function User() {
  const {auth} = useAuth();
  const handleClick = () => {
    console.log(auth);
  };

  return (
    <Container>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary' type='submit' onClick={handleClick}>
          View Profile
        </Button>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary'>View Result</Button>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary'>View/Request Voter ID</Button>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary'>Cast Vote</Button>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary'>Change Password</Button>
      </Row>
    </Container>
  );
}

export default User;
