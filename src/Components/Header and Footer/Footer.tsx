import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactButton from '../Buttons/ContactButton';
import './Footer.css';

function Footer() {
  return (
    <Container fluid className="EndBody p-0 w-100">
    <Row className="align-items-center w-100">
      <Col md={4} className="Top13 justify-content-left">
        <Col className="LogoRebo h2 text-white text-center align-items-center">
          <img className="LogoReboEnd img-fluid" src={require('../Figma Components/Frame.png')} alt="Logo" />
        </Col>
      </Col>

      <Col md={4} className="Top14 text-md-start text-center d-block justify-content-center text-wrap py-3 text-black">
        <p className="h1 text-white ">PRODUCTOS</p>
        <p className="h3 text-white ">Uniformes industriales</p>
        <p className="h3 text-white ">Equipo de protección personal</p>
        <p className="h3 text-white ">Calzado industrial</p>
        <p className="h3 h-md2 text-white ">Herramientas</p>
      </Col>

      <Col md={4} className="Top15 justify-content-center mt-4  d-block">
        <p className="h1 h-md2 text-white" style={{ fontFamily: 'Ubuntu' }}>CONTACTO</p>
        <Col className="col-sm-auto" >
          <ContactButton label="55 55 2852 8221" ContactLink="" IconClass="bi bi-whatsapp" />
        </Col>
        <Col className="col-sm-auto" >
          <ContactButton label="55 55 2852 8221" ContactLink="" IconClass="bi bi-envelope" />
        </Col>
        <Col className="col-sm-auto" >
          <ContactButton label="55 55 2852 8221" ContactLink="" IconClass="bi bi-geo-alt" />
        </Col>
      </Col>
    </Row>
  </Container>
  );
}

export default Footer;