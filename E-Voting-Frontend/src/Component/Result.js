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
            <td>Meryem EZZAAM</td>
            <td>Rabat 332</td>
            <td>246</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Adnane EZ-ZAIM</td>
            <td>RABAT 446</td>
            <td>30</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Aboubakr EL HARRAK</td>
            <td>RABAT 121</td>
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
