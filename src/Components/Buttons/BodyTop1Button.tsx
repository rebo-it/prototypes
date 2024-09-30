import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap en tu proyecto
import './BodyTop1Button.css';

interface BodyTop1Buttonprops {
    label: string;
    ContactLink: string;
    ButtonColor: string;
    TextColor: string;
}

const BodyTop1Button: React.FC<BodyTop1Buttonprops> = ({ label, ContactLink, ButtonColor, TextColor }) => {
    return (
        <a href={ContactLink} target="_blank" rel="noreferrer" className="btn" style={{ backgroundColor: ButtonColor, color: TextColor }}>
            {label}
        </a>
    );
};

export default BodyTop1Button;
