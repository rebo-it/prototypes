import React from 'react';
import { Card,  } from 'react-bootstrap'; // Importamos Card, Button e Image de React Bootstrap
import './QualityCard.css'
interface QualityCardsProps {
  label: string;
  
  
}

const QualityCards: React.FC<QualityCardsProps> = ({ label  }) => {
  return (
    <Card className="QualityCard" style={{background:'none', border:'none', width:'150px'}}>
      <span className="rounded-circle">
        {/* Asegúrate de que la ruta sea correcta */}
        <Card.Img variant="top"
          src={require('/WIP/prototypes/src/Components/Figma Components/Medals/Group 17.png')} 
          className="MedalImage img-fluid" 
          alt="Product image" 
         
        />
      </span>
      
      <Card.Body>
        <Card.Title className="MedaltName " style={{ fontSize: 'calc(0.5rem + 0.75vw)', font:'ubuntu',color:'rgba(153, 0, 0, 1)' }}>
          {label}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default QualityCards;