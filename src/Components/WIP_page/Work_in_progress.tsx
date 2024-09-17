import React from "react";
import './Work_in_progress.css'

const WorkInProgress: React.FC = () => {

  return(
		<div className="WipContainer">
			<p className="WipText">Este sitio web se encuentra bajo construcción</p>
			
			<div className="DatosDeContacto">
				<p>Podrás encontrarnos en los siguientes enlaces:</p>
				<p> <a href="https://www.instagram.com/" target="_blank"> <i className="bi bi-instagram"style={{ fontSize: '50px', color: 'white' }}  >  </i></a> </p>
				<p> <a href="https://www.instagram.com/" target="_blank"> <i className="bi bi-envelope"style={{ fontSize: '50px', color: 'white' }}  >  </i></a> </p>
				<p> <a href="https://web.whatsapp.com/" target="_blank"> <i className="bi bi-whatsapp"style={{ fontSize: '50px', color: 'white' }}  > </i></a> </p>
				
				
			</div>

		</div>
  );




};

export default WorkInProgress;