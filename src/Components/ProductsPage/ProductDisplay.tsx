import React, { useState } from 'react';
import HeaderBar from '../Header and Footer/HeaderBar';
import Footer from '../Header and Footer/Footer';
import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import Formular from '../ContactPage/Formular';

interface ProductDisplayProps {}

const ProductDisplay: React.FC<ProductDisplayProps> = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="ProductsBody" style={{ backgroundColor: 'rgba(33, 33, 26, 1)' }}>
            <HeaderBar />
            <Container>
                <Row className="DisplayTop p-0">
                    <h1 className="DisplayTitle text-center text-md-start text-white">Producto 1</h1>
                </Row>
                <div style={{ backgroundColor: 'white', height: '3px', width: '100%' }}></div>
                <Row className="my-4">
                    <Col xs={12} md={6}>
                        {/* Placeholder for an image or additional content */}
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="text-white justify-content-center justify-content-md-start">Categoría: Calzado Industrial</p>
                        <p className="text-white">Nombre del Producto 1</p>
                        <p className="text-white">$699.00</p>
                        <p className="text-white">Descripción detallada del producto</p>
                        <Row style={{paddingBottom:'1rem'}} className='justify-content-center'>
                            <Button onClick={handleShow} variant="primary" style={{minWidth:'250px',backgroundColor:'rgba(255, 113, 0, 1)', border:'none'}}>
                                SOLICITA UNA COTIZACIÓN
                            </Button>
                        </Row>
                            
                        <Row className='justify-content-center'>
                        <Button  style={{background:'none', borderColor:'rgba(255, 113, 0, 1)', color:'rgba(255, 113, 0, 1)', minWidth:'250px'}}>
                                DESCARGAR FICHA TÉCNICA
                            </Button> 
                        </Row>
                            
                        
                            
                        
                        
                        <Offcanvas  show={show} onHide={handleClose} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title >Solicita una cotización</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Formular textColor='black'/>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-white">
                            Descripción del producto: 
                           
                        </p>
                        <p className='text-white'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ProductDisplay;
