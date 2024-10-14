import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './HeaderButton.css';

interface HeaderButtonprops {
  label: string;
  ContactLink: string;
  IconClass: string;
  IconColor: string;
}

const HeaderButton: React.FC<HeaderButtonprops> = ({ label, ContactLink, IconClass, IconColor }) => {
  return (
    <a href={ContactLink} target="_blank" rel="noreferrer" className="ContactButton p-2  d-inline-flex align-items-center">
      <i className={`${IconClass} me-2`} style={{ color: IconColor }}></i>
      {label}
    </a>
  );
};

export default HeaderButton;
