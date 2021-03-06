import React from 'react';
import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap'
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
          <Subscription />
          <Footer />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
