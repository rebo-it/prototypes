import React from "react";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";  // Importar useNavigate para la redirección
interface HeaderWithButtonsProps{
  
}
const HeaderWithButtons: React.FC<HeaderWithButtonsProps> = ({  }) => {
	const navigate = useNavigate();
	return (
      <div className="header-container">
        <div className="left-button">
          <Button label="Learn More" variant="ImageButton" onClick={() => console.log('Learn More clicked')} />
        </div>

        <div className="right-buttons">
          <Button label="About" variant="TextButton" onClick={() => console.log('Apply clicked')} />
          <Button label="Solution" variant="TextButton" onClick={() => console.log('Apply clicked')} />
    	    <Button label="Team" variant="TextButton" onClick={() => console.log('Apply clicked')} />
  				<Button label="Portfolio" variant="TextButton" onClick={() => console.log('Apply clicked')} />
        	<Button label="Pricing" variant="TextButton" onClick={() => console.log('Apply clicked')} />
          <Button label="FAQ" variant="TextButton" onClick={() => console.log('Apply clicked')} />
          <Button label="Get Started" variant="GetStarted" onClick={()  => navigate('/signup')} />
        </div>
      </div>
    );
  };
  
  export default HeaderWithButtons;