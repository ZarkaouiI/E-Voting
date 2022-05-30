import React,{ useState } from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import  {Link} from 'react-router-dom';
import axios from '../Api/axios';

function PartyDetail() {

    const [partyName, setPartyName] = useState('');
    const [leader, setLeader] = useState(''); 
    const [numCandidates, setNumCandidates] = useState(0);
    const [symbol,setSymbol] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();
        const obj = {
            "partyName" : partyName,
            "leader" : leader,
            "symbol" : symbol,
            "numCandidates" : numCandidates
        }
        console.log(obj);
        console.log(JSON.parse(localStorage.getItem("user"))["access_token"])
        fetch("http://localhost:8080/api/admin/add/party", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": JSON.parse(localStorage.getItem("user"))["access_token"]
          },
          body: JSON.stringify({ partyName,leader,symbol,numCandidates }),
        }).then((res)=>{console.log(res)}).catch((e)=>{console.log(e)});
        // axios.post(
        //     "http://localhost:8080/api/admin/add/party",
        //     JSON.stringify({ partyName,leader,symbol,numCandidates }),
        //     {
        //       headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},
        //       withCredentials: true,
        //     }
        //   ).then().catch((e)=>{console.log(e)});
    }


    const style = {
      width: "100%",
      paddingLeft: 100,
      paddingRight: 200,
      paddingTop: 30,
      paddingBottom: 30,
    };


  return (
    <div className="align-items-center" style={style}>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Party Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Party Name'
              onChange={(e) => setPartyName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Leader</Form.Label>
            <Form.Control
              type='text'
              placeholder='Leader'
              onChange={(e) => setLeader(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail2'>
            <Form.Label>Symbol</Form.Label>
            <Form.Control
              type='text'
              placeholder='Symbol'
              onChange={(e) => setSymbol(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword2'>
            <Form.Label>Number of Candidates</Form.Label>
            <Form.Control
              type='number'
              placeholder='Number of Candidates'
              onChange={(e) => setNumCandidates(e.target.value)}
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

export default PartyDetail