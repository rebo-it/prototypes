import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactButton from '../Buttons/ContactButton';
import './Footer.css';

function Footer() {
  return (
    <Container fluid className="EndBody p-0 w-100 ">
    <Row className="EndContainer align-items-center p-0">
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
          <ContactButton label="56 6158 5215" ContactLink="https://api.whatsapp.com/send/?phone=5215561585215&text&type=phone_number&app_absent=0" IconClass="bi bi-whatsapp" />
        </Col>
        <Col className="col-sm-auto" >
          <ContactButton label="contacto@rebo.mx" ContactLink="mailto:contacto@rebo.mx" IconClass="bi bi-envelope" />
        </Col>
        <Col className="col-sm-auto" >
          <ContactButton label="Ubicación" ContactLink="https://www.google.com/maps/search/metro+rosario/@19.504844,-99.2108785,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D" IconClass="bi bi-geo-alt" />
        </Col>
      </Col>
    </Row>
  </Container>
  );
}

export default Footer;