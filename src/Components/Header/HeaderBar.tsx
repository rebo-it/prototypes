import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './HeaderBar.css';
import HeaderButton from "../Buttons/HeaderButton";



interface HeaderBarprops {}

const HeaderBar: React.FC<HeaderBarprops> = () => {
	return (
		<div className="Header container-fluid p-0">
			<div className="ContactInfo bg-dark d-flex align-items-center">
			<nav className="navbar  navbar-expand">

					<div className="container-fluid">
						
						<ul className="navbar-nav ">
							<li className="nav-item">
							<a className="nav-link" href=""><i className="bi bi-whatsapp"></i> Link 1</a>
							</li>
							<li className="nav-item justify-content-end">
							<a className="nav-link" href=""><i className="bi bi-geo-alt"></i> Link 2</a>
							</li>
							<li className="nav-item">
							<a className="nav-link" href=""><i className="bi bi-envelope"></i> Link 3</a>
							</li>
							
						</ul>
					</div>					
			</nav>

	
				
			</div>
			<div className="LogoContainer d-flex align-items-center justify-content-between ">
				<img className="Logo img-fluid" src={require('../Figma Components/ReboLogoWhite.png')} alt="LogoRebo"/>
				<div className="ButtonContainer d-flex gap-3 justify-content-start">
					<nav className="nav navbar-expand-lg d-none d-lg-block justify-content-start nav-pills flex-column flex-sm-row">
					<HeaderButton label="INICIO" IconClass=""  IconColor="white" routePath="/"/>
					<HeaderButton label="NOSOTROS" IconClass=""  IconColor="white" routePath="/Nosotros"/>
					<HeaderButton label="PRODUCTOS+" IconClass=""  IconColor="white" routePath=""/>
					<HeaderButton label="FAQS" IconClass=""  IconColor="white" routePath=""/>
					<HeaderButton label="CONTACTANOS" IconClass=""  IconColor="white" routePath=""/>
					<img className="3Dots img-fluid nav-item dropdown" src={require('../Figma Components/Group 1.png')} alt="3 dots"/>
					</nav>
					
				</div>
				<div className="offcanvas offcanvas-start offcanvas-lg" id="demo">
					<div className="offcanvas-header">
						<h1 className="offcanvas-title">Menú</h1>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
					</div>
					<div className="offcanvas-body">
						<HeaderButton label="INICIO" IconClass=""  IconColor="white"data-bs-toggle="offcanvas" routePath="/"/>
						<HeaderButton label="NOSOTROS" IconClass=""  IconColor="white" data-bs-toggle="offcanvas"routePath=""/>
						<HeaderButton label="PRODUCTOS+" IconClass=""  IconColor="white" data-bs-toggle="offcanvas"routePath=""/>
						<HeaderButton label="FAQS" IconClass=""  IconColor="white" data-bs-toggle="offcanvas"routePath=""/>
						<HeaderButton label="CONTACTANOS" IconClass=""  IconColor="white" data-bs-toggle="offcanvas"routePath=""/>

					</div>

				</div>
				<button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">Menú</button>

			</div>
		</div>
	);
};

export default HeaderBar;