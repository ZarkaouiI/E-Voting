import React, { useState} from 'react'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function Candidate() {

    const [candidateName, setCandidateName] = useState('');
    const [partyName, setPartyName] = useState('');
    const [age, setAge] = useState(0);
    const [constituency, setConstituency] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            candidateName : candidateName,
            partyName : partyName,
            age : age,
            constituency : constituency,
            address : address,
            contact : contact
        }
        console.log(obj);
    }

    const style = {
    width: "100%",
    paddingLeft: 100,
    paddingRight: 200,
    paddingTop: 30,
    paddingBottom: 30,
  };

  return (
    <div className='align-items-center' style={style}>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridParty'>
            <Form.Label>Party Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Party Name'
              onChange={(e) => setPartyName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridCandidate'>
            <Form.Label>Candiadte Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Candidate Name'
              onChange={(e) => setCandidateName(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridAge'>
            <Form.Label>Symbol</Form.Label>
            <Form.Control
              type='Number'
              placeholder='Age'
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridContact'>
            <Form.Label>Conatact</Form.Label>
            <Form.Control
              type='text'
              placeholder='Contact'
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridConstituency'>
            <Form.Label>Constituency</Form.Label>
            <Form.Control
              type='text'
              placeholder='Constituency'
              onChange={(e) => setConstituency(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} controlId='formGridAddress'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Address'
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        </Row>
        <p></p>
        <Button variant='outline-success' type='submit'>
          Submit
        </Button>
        <p> </p>
        <Link to='/admin'>
          <Button variant='outline-info' type='submit'>
            Go Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Candidate