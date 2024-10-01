import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BodyTop1Button.css';

interface BodyTop1Buttonprops {
    label: string;
    ContactLink: string;
    ButtonColor: string;
    TextColor: string;
}

const BodyTop1Button: React.FC<BodyTop1Buttonprops> = ({ label, ContactLink, ButtonColor, TextColor }) => {
    return (
        <a href={ContactLink} 
           target="_blank" 
           rel="noreferrer" 
           className="btn btn-block text-center  btn-md" 
           style={{ backgroundColor: ButtonColor, color: TextColor, maxWidth: '100%', whiteSpace: 'normal', wordWrap: 'break-word', fontSize:'2.5vh', }}>
            {label}
        </a>
    );
};

export default BodyTop1Button;
