import React from "react";
import { Card } from 'react-bootstrap'; // Importamos Card y Button de React Bootstrap
import './HistoryCard.css';




interface HistoryCardprops {
    label: string;
    
    label2: string;
  
}


const HistoryCard: React.FC<HistoryCardprops> = ({ label, label2}) => {
    return (
        <Card className="Values">
            <Card.Img 
                src={require('../Figma Components/History/Misión.png')} 
                className="HistoryCardImage img-fluid" 
                alt="History image" 
            />
            <Card.Body className="HistoryCardBody" style={{maxHeight:'100px'}}>
                <Card.Title className="HistoryCardTitle text-white" style={{ height:'72px', marginBottom:'68px' }}>
                    {label}
                </Card.Title>
                <p>{label2}</p> 
            </Card.Body>
            <div style={{width:'220px',backgroundColor:'rgba(255, 113, 0, 1)', height:'2px', marginTop:'75px'}}></div>
        </Card>
    );
};

export default HistoryCard;
