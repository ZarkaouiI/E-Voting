import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

function Election() {

    const [name,setName] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [votingDate, setVotingDate] =useState(Date);
    const [resultDate, setResultDate] = useState(Date);

    const handleSubmit = (e) => {
      e.preventDefault();
      const obj = {
        name: name,
        state: state,
        district: district,
        votingDate: votingDate,
        resultDate : resultDate
      };
      console.log(obj);
    };

    const style = {
      width: "100%",
      paddingLeft: 100,
      paddingRight: 200,
      paddingTop: 30,
      paddingBottom: 30,
    };
    
  return (
    <div className="align-items-center justify-content-center" style={style}>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Election Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Election Name'
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>State</Form.Label>
            <Form.Control
              type='text'
              placeholder='State'
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formGriddistrict'>
            <Form.Label>District</Form.Label>
            <Form.Control
              type='text'
              placeholder='District'
              onChange={(e) => setDistrict(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail2'>
            <Form.Label>District</Form.Label>
            <Form.Control
              type='Date'
              placeholder='Date'
              onChange={(e) => setVotingDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridPassword2'>
            <Form.Label>Number of Candidates</Form.Label>
            <Form.Control
              type='Date'
              placeholder='Result Date'
              onChange={(e) => setResultDate(e.target.value)}
            />
          </Form.Group>
        </Row>
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

export default Election