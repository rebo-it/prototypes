import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
//import './Body.css'; // Archivo CSS para los estilos del body

import Button from "../Buttons/Button";
import './BodyLandingPage.css'
const BodyLandingPage: React.FC = () => {
  return (
    <div className="BodyContainer">
      <div className="BodyParagraph">
        Landing page abstract background
      </div>
      <div className="BodyButtons">
      <span className="Button_left">
        <Button size="large" label="Apply now" variant="TextButton" onClick={() => console.log('Apply clicked')} />
      </span>
      <span className="Button_right">
        <Button size="large" label="Learn more" variant="TextButton" onClick={() => console.log('Apply clicked')} />
      </span>
      </div>
      <div className="BodyIcon">
        <Button size="small" label="" variant="IconButton" icon="bi bi-file-play" onClick={() => console.log('Apply clicked')} />
        
      </div>
    </div>

  );
};
export default BodyLandingPage;