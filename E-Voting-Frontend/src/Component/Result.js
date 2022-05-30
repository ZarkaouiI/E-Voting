import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function Result() {
  return (
    <Container>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Constituency</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Narendera Modi</td>
            <td>Varanasi</td>
            <td>246</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Rahul Gandhi</td>
            <td>Rai Bareily</td>
            <td>30</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Akhilesh Yadav</td>
            <td>Safai</td>
            <td>100</td>
          </tr>
        </tbody>
      </Table>
      <Link to='/admin'>
        <Button variant='outline-primary'>Go to Dashboard</Button>
      </Link>
    </Container>
  );
}

export default Result;
