import React from "react";
//import './Body.css'; // Archivo CSS para los estilos del body

import Button from "../Buttons/Button";
const BodyLandingPage: React.FC = () => {
  return (
    <div className="BodyContainer">
      <div className="BodyParagraph">
        Landing page abstract background
      </div>
      <div className="BodyButtons">
      <Button size="small" label="About" variant="TextButton" onClick={() => console.log('Apply clicked')} />
      <Button size="small" label="About" variant="TextButton" onClick={() => console.log('Apply clicked')} />
      </div>
      <div className="BodyIcon">
        <Button size="small" label="About" variant="TextButton" onClick={() => console.log('Apply clicked')} />
      </div>
    </div>

  );
};
export default BodyLandingPage;