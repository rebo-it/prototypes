import React from "react";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";  // Importar useNavigate para la redirección
import './HeaderWithButtons.css'; 
interface HeaderWithButtonsProps{
  
}
const HeaderWithButtons: React.FC<HeaderWithButtonsProps> = () => {
	const navigate = useNavigate();
	return (
      <div className="header-container">
        <div className="left-button">
          <Button size="image" label="Learn More" variant="ImageButton" imageSrc="./Assets/logo192.png" onClick={() => console.log('Learn More clicked')} />
        </div>

        <div className="right-buttons">
          <Button size="medium" label="About" variant="TextButton" onClick={() => console.log('Apply clicked')} />
          <Button size="medium" label="Solution" variant="TextButton" onClick={() => console.log('Apply clicked')} />
    	    <Button size="medium" label="Team" variant="TextButton" onClick={() => console.log('Apply clicked')} />
  				<Button size="medium" label="Portfolio" variant="TextButton" onClick={() => console.log('Apply clicked')} />
        	<Button size="medium" label="Pricing" variant="TextButton" onClick={() => console.log('Apply clicked')} />
          <Button size="medium" label="FAQ" variant="TextButton" onClick={() => console.log('Apply clicked')} />
          <Button size="large" label="Get Started" variant="GetStarted" onClick={()  => navigate('/signup')} />
        </div>
      </div>
    );
  };
  
  export default HeaderWithButtons;