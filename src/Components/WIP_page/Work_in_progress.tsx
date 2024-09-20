import React from "react";
import './Work_in_progress.css'
//import LoadingBar from "../LoadingBar";
import ContactButton from "../Buttons/ContactButton";



const WorkInProgress: React.FC = () => {

  return(
		<div className="WipContainer">
				
				<div className="imageContainer"><img className="logo" src={require('../Logos/LogoRebo.png')} alt="LogoRebo"/></div>
				<div className="MessageCones">
				<img 
					src={require('../Logos/Loading.webp')} 
					alt="Description of the GIF" 
					style={{ width: '300px', height: 'auto' }} // Ajusta el tamaño según sea necesario
      />
					<p className="WipText"> ¡Lo sentimos! este sitio web se encuentra bajo construcción </p>
					
				</div>
				<div className="Cuerpo">
					<p className="WipMessage">Comunicate con nosotros en los siguientes enlaces:</p>
					<ContactButton label="5561585215" ContactLink="https://wa.me/5215561585215" IconChosen="bi bi-whatsapp" IconColor="green" IconFont="marcellus" IconSize="50px"/>
					<ContactButton label="edgar.mtz@rebo.mx" ContactLink="mailto:edgar.mtz@rebo.mx" IconChosen="bi bi-envelope" IconColor="black" IconFont="marcellus" IconSize="50px"/>
					<ContactButton label="contacto@rebo.mx" ContactLink="mailto:contacto@rebo.mx" IconChosen="bi bi-envelope" IconColor="black" IconFont="marcellus" IconSize="50px"/>
					
				</div>
			
		</div>
  );




};

export default WorkInProgress;