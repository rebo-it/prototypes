import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QualityCards from './QualityCard';

function MedalHolder() {
  return (
    <Container className='MedalHolder'>
    <Row className='d-flex justify-content-center'>
        <Col xs={6} md={3}>
            <QualityCards label='Garantía total de satisfacción'/>
        </Col>
        <Col xs={6} md={3}>
            <QualityCards label='Garantía total de satisfacción'/>
        </Col>
        <Col xs={6} md={3}>
            <QualityCards label='Garantía total de satisfacción'/>
        </Col>
        <Col xs={6} md={3}>
            <QualityCards label='Garantía total de satisfacción'/>
        </Col>
    </Row>
   </Container>
);
}

export default MedalHolder;