import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

const HomePage = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="search">Search</Nav.Link>
          <Nav.Link href="file">File</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default HomePage;
