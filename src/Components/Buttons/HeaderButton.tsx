import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './HeaderButton.css';

interface HeaderButtonprops {
  label: string;
  routePath: string;  // Cambié ContactLink a routePath para ser más claro
  IconClass: string;
  IconColor: string;
}

const HeaderButton: React.FC<HeaderButtonprops> = ({ label, routePath, IconClass, IconColor }) => {
  const navigate = useNavigate();  // Hook de React Router para navegar

  const handleClick = () => {
    navigate(routePath); // Navegar a la ruta especificada
  };

  return (
    <button onClick={handleClick} className="ContactButton p-2 d-inline-flex align-items-center">
      <i className={`${IconClass} me-2`} style={{ color: IconColor }}></i>
      {label}
    </button>
  );
};

export default HeaderButton;
