import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


function Nav() {
  return (
    <>
      <Navbar bg='dark' sticky='top' variant='dark'>
        <div>
          <Navbar.Brand href='#home'>
            <span className='m-4'>Electronic Voting System</span>
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
}

export default Nav;