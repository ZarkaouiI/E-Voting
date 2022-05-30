import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function PendingVoterId() {
  const style = {
    width: "100%",
    paddingLeft: 200,
    paddingRight: 200,
    paddingTop: 30,
    paddingBottom: 30,
  };

  return (
    <div className='justify-content-center align-items-center' style={style}>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Pending</td>
            <td>
              <Button className='mt-2' variant='outline-success' type='submit'>
                Approve
              </Button>
              <Button className='mt-2' variant='outline-danger' type='submit'>
                Reject
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ram</td>
            <td>Pending</td>
            <td>
              <Button className='mt-2' variant='outline-success' type='submit'>
                Approve
              </Button>
              <Button className='mt-2' variant='outline-danger' type='submit'>
                Reject
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Raju</td>
            <td>Pending</td>
            <td>
              <Button className='mt-2' variant='outline-success' type='submit'>
                Approve
              </Button>
              <Button className='mt-2' variant='outline-danger' type='submit'>
                Reject
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Link to='/admin'>
        <Button variant='outline-primary' type='submit'>
          Go Home
        </Button>
      </Link>
    </div>
  );
}

export default PendingVoterId