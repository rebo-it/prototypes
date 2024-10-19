import React from "react";
import { Card, Button } from 'react-bootstrap'; // Importamos Card y Button de React Bootstrap
import './LandingPageProducts.css';




interface LandingPageProductsprops {
    label: string;
    ContactLink: string;
    label2: string;
  
}


const LandingPageProducts: React.FC<LandingPageProductsprops> = ({ label, ContactLink, label2}) => {
    return (
        <Card className="sm">
            <Card.Img 
                src={require('../Figma Components/casco1.png')} 
                className="ImageEquipment img-fluid" 
                alt="Product image" 
                style={{paddingTop:'40px'}}
            />
            <Card.Body className="ProductCardBody" style={{maxHeight:'100px'}}>
                <Card.Title className="ProductName text-white" style={{ fontSize: '20px', paddingBottom:'37px' }}>
                    {label}
                </Card.Title>
                <Button href={ContactLink} className="CardLink mt-auto " style={{ fontSize:'calc(0.75rem + 0.5vw)', textDecoration:'none' }}>
                    {label2}
                </Button>
                
            </Card.Body>
            <div style={{height:'3px', backgroundColor:'rgba(255, 113, 0, 1)', width:'220px',marginTop:'35px'}}></div>
        </Card>
        
    );
};

export default LandingPageProducts;
