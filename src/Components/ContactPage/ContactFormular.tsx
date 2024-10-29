import React from "react";

import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap
import Formular from "./Formular";





const ContactFormular: React.FC = () => {
  return (
    <Container className="ContactSection p-0 w-100">
        <Row className="ContactName p-0">
            <h1 className="ContactTitle text-start text-white ">Contacto</h1>
        </Row>
        <div style={{backgroundColor:'white',height:'3px', width:'100%'}}></div>
        <Row>
            <Col xs={12} lg={6} >

            </Col>
            <Col xs={ 12} lg={6} style={{backgroundColor:'rgba(33, 33, 26, 1)'}} >
                <Formular/>
            
            </Col>

        </Row>






    
    </Container>
        );
        };

export default ContactFormular;