import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from '../Api/axios';

const SIGNUP_URL = '/register';

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(Date);
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAdress, setPermanentAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      username: username,
      password: password,
      gender: gender,
      dob : dob,
      role : "USER",
      presentAddresss: presentAddress,
      permanentAddress: permanentAdress,
      phoneNumber: phoneNumber,
    };
    console.log(obj);
    try{
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify(obj),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(JSON.stringify(response?.data));
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  const style = {
    width: "100%",
    paddingLeft: 100,
    paddingRight: 200,
    paddingTop: 30,
    paddingBottom: 30,
  };

  return (
    <div style={style}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formGridName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your full name'
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>Permanent Address</Form.Label>
          <Form.Control
            placeholder='1234 Main St'
            onChange={(e) => setPermanentAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formGridAddress2'>
          <Form.Label>Present Address</Form.Label>
          <Form.Control
            placeholder='Apartment, studio, or floor'
            onChange={(e) => setPresentAddress(e.target.value)}
          />
        </Form.Group>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridGender'>
            <Form.Label>Gender</Form.Label>
            <Form.Select onClick={(e) => setGender(e.target.value)}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridDob'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='date'
              placeholder=''
              onChange={(e) => setDob(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='number'
              placeholder='+123456789'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Button variant='outline-success' type='submit'>
          Register
        </Button>
        <p></p>
        <Link to='/login'>
          <Button variant='outline-primary' type='submit'>
            Login
          </Button>
        </Link>
      </Form>
    </div>
  );
}

