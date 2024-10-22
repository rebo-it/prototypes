import React from "react";
import './MidSection.css';
import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap
import Image from 'react-bootstrap/Image';
import HistoryCarousel from "../Cards/HistoryCarousel";
import HistoryCard from "../Cards/HistoryCard";

const History: React.FC = () => {
  return (
    <Container fluid className="HistoryBody bg-image p-0">
      {/* Resto del contenido de la parte superior */}
      <Row className="HistoryTop p-0">
        <Col xs={12} lg={6} className="HistoryImages position relative">
        <Image className="z-1 position absolute" src={require('../Figma Components/History/grupo-rebo-hero-9 1.png')} fluid />;
        <Image className="z-0 position absolute " src={require('../Figma Components/History/Rectangle 31.png')} fluid />;
      
        
        </Col>
        <Col xs={12} lg={6} className="HistoryText justify-content-start">
            <h1>Historia</h1>
            <p>Historia de la empresa Rebo</p>
        </Col>
        
      </Row>
      <Row className="HistoryLow justify-content-center p-0">
        <div className="d-lg-none">
          <HistoryCarousel/>
        </div>
        <div className="card1 col-4 col-xs-auto justify-content-end d-none d-lg-flex p-0">
            <HistoryCard label="Visión" label2="Visión de la empresa"/>
          </div>
          <div className="card2 col-4 col-xs-auto justify-content-center d-none d-lg-flex p-0">
          <HistoryCard label="Visión" label2="Visión de la empresa"/>
          </div>
          <div className="card3 col-4 col-xs-auto justify-content-start d-none d-lg-flex p-0" style={{margin:'0'}}>
          <HistoryCard label="Visión" label2="Visión de la empresa"/>
          </div>


      </Row>
    </Container>

);
};

export default History;
