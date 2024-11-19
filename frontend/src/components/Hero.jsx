import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MERN Authentication</h1>
          <p className='text-center mb-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sint doloribus in et odio ad nulla. Aliquam unde deleniti modi fuga ad hic deserunt explicabo esse voluptatibus in! Sequi, eius.
          </p>
          <div className="d-flex">
          <LinkContainer to='/login'>
            <Button variant='primary' className='me-3'>Sign In</Button>
            </LinkContainer>
            
          <LinkContainer to='/register'>
            <Button variant='secondary' className='me-3'>Register</Button>
            </LinkContainer>
          </div>

        </Card>
      </Container>
    </div>
  )
}

export default Hero
