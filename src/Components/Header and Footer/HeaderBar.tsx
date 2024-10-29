import React from "react";
 // Asegúrate de importar Bootstrap
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './HeaderBar.css';
import HeaderButton from "../Buttons/HeaderButton";



interface HeaderBarprops {}

const HeaderBar: React.FC<HeaderBarprops> = () => {
	const [show, setShow] = useState(false);

 	 const handleClose = () => setShow(false);
 	 const handleShow = () => setShow(true);

	return (
		<div className="Header container-fluid p-0 w-100">
			<div className="ContactInfo bg-dark d-flex align-items-center">
			<nav className="navbar  navbar-expand">

					<div className="container-fluid">
						
						<ul className="navbar-nav ">
							<li className="nav-item">
							<a className="nav-link" href="/"><i className="bi bi-whatsapp"></i> Link 1</a>
							</li>
							<li className="nav-item justify-content-end">
							<a className="nav-link" href="/"><i className="bi bi-geo-alt"></i> Link 2</a>
							</li>
							<li className="nav-item">
							<a className="nav-link" href="/"><i className="bi bi-envelope"></i> Link 3</a>
							</li>
							
						</ul>
					</div>					
			</nav>

	
				
			</div>
			<div className="LogoContainer d-flex align-items-center justify-content-between ">
				<img className="Logo img-fluid" src={require('../Figma Components/ReboLogoWhite.png')} alt="LogoRebo"/>
				<div className="ButtonContainer d-flex gap-3 justify-content-start">
					<Button variant="primary" onClick={handleShow} className="Menu d-lg-none text-center " style={{ border: 'none', background: 'none'}}>
						Menú
					</Button>
					<nav className="nav navbar-expand-lg d-none d-lg-block justify-content-start nav-pills flex-column flex-sm-row">
					<HeaderButton label="INICIO" IconClass=""  IconColor="white" routePath="/prototypes" LabelColor="white"/>
					<HeaderButton label="NOSOTROS" IconClass=""  IconColor="white" routePath="/Nosotros" LabelColor="white"/>
					<HeaderButton label="PRODUCTOS+" IconClass=""  IconColor="white" routePath="/Productos" LabelColor="white"/>
					<HeaderButton label="FAQS" IconClass=""  IconColor="white" routePath="" LabelColor="white"/>
					<HeaderButton label="CONTACTANOS" IconClass=""  IconColor="white" routePath="/Contacto" LabelColor="white"/>
					<img className="3Dots img-fluid nav-item dropdown" src={require('../Figma Components/Group 1.png')} alt="3 dots"/>
					</nav>
					
				</div>
			
			</div>
				

				
				<Offcanvas show={show} onHide={handleClose} responsive="lg">
						<Offcanvas.Header closeButton>
						
						<Offcanvas.Title>Menú</Offcanvas.Title>
						</Offcanvas.Header  >
						<Offcanvas.Body className="d-lg-none">
							<HeaderButton label="INICIO" IconClass=""  IconColor="white" routePath="/prototypes" LabelColor="black"/>
							<HeaderButton label="NOSOTROS" IconClass=""  IconColor="white" routePath="/Nosotros" LabelColor="black"/>
							<HeaderButton label="PRODUCTOS+" IconClass=""  IconColor="white" routePath="/Productos" LabelColor="black"/>
							<HeaderButton label="FAQS" IconClass=""  IconColor="white" routePath="" LabelColor="black"/>
							<HeaderButton label="CONTACTANOS" IconClass=""  IconColor="white"  routePath="/Contacto" LabelColor="black"/>
						</Offcanvas.Body>
					</Offcanvas>

			</div>
			
		
	);
};

export default HeaderBar;
