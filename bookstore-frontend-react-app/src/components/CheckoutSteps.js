import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Sign In &nbsp; &nbsp; &nbsp; &nbsp; ></Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Shipping &nbsp; &nbsp; &nbsp; &nbsp; ></Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>


      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
