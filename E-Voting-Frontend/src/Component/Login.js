import React, { useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Api/axios";
import useAuth from '../Hooks/useAuth'

const LOGIN_URL = "/authenticate";

function parseJwt(token) {
  // Split the token and taken the second
  const base64Url = token.split(".")[1];
  return JSON.parse(window.atob(base64Url));
}

export default function Login() {
  const { setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, password);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      const data = parseJwt(accessToken);
      const role = data.isUser ? "USER" : "ADMIN";
      setAuth({ username, password, role, accessToken });
      setUsername("");
      setPassword("");
      if(data.isUser){
        navigate('/user')
      }else{
        navigate("/admin");
      }
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      console.log(errMsg);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
        <Button variant='outline-success' type='submit'>
          Login
        </Button>
        <p> </p>
        <Link to='/signup'>
          <Button variant='outline-primary' type='submit'>
            SignUp
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
