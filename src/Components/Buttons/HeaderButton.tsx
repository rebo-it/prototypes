import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'; // Importa el componente Button de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderButton.css';

interface HeaderButtonprops {
  label: string;
  routePath: string; 
  IconClass: string;
  IconColor: string;
  LabelColor: string;
}

const HeaderButton: React.FC<HeaderButtonprops> = ({ label, routePath, IconClass, IconColor, LabelColor }) => {
  const navigate = useNavigate();  // Hook de React Router para navegar

  const handleClick = () => {
    navigate(routePath); // Navegar a la ruta especificada
  };

  return (
    <Button onClick={handleClick} className="ContactButton d-inline-flex align-items-center" style={{color:LabelColor}}>
      <i className={`${IconClass} me-2`} style={{ color: IconColor }}></i>
      {label}
    </Button>
  );
};

export default HeaderButton;
