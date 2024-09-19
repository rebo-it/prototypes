import React from "react";
import './Work_in_progress.css'


const WorkInProgress: React.FC = () => {

  return(
		<div className="WipContainer">
			<div className="imageContainer"><img className="logo" src={require('../Logos/LogoRebo.png')} alt="LogoRebo"/></div>
			<div className="MessageCones">
			<i className="bi bi-cone-striped"style={{ font: 'marcellus', fontSize: '100px', color: 'orange' }}></i><p className="WipText"> Este sitio web se encuentra bajo construcción </p><i className="bi bi-cone-striped"style={{ font: 'marcellus', fontSize: '100px', color: 'orange' }}></i>
			<p></p>
			</div>
			<div className="DatosDeContacto">
				<p className="WipMessage">Comunicate con nosotros en los siguientes enlaces:</p>
				<div className="LinkWhatsapp"> <a href="https://wa.me/5215561585215" target="_blank" rel="noreferrer"> <i className="bi bi-whatsapp"style={{ font: 'marcellus', fontSize: '50px', color: 'green' }}  > 5561585215 </i></a> </div>
				<div className="LinkContacto1"> <a href="mailto:contacto@rebo.mx" target="_blank" rel="noreferrer"> <i className="bi bi-envelope"style={{ font: 'marcellus', fontSize: '50px', color: 'black' }}  > <p className="ContactoRebo">contacto@rebo.mx</p>  </i></a> </div>
				<div className="LinkContacto2"> <a href="mailto:edgar.mtz@rebo.mx" target="_blank" rel="noreferrer"> <i className="bi bi-envelope"style={{ font: 'marcellus', fontSize: '50px', color: 'black' }}  > edgar.mtz@rebo.mx</i></a> </div>
				
				
			</div>

		</div>
  );




};

export default WorkInProgress;