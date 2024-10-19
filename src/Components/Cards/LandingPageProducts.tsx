import React from "react";
import { Card, Button } from 'react-bootstrap'; // Importamos Card y Button de React Bootstrap
import './LandingPageProducts.css';
// import casco from '../Figma Components/casco1.png'; 



interface LandingPageProductsprops {
    label: string;
    ContactLink: string;
    label2: string;
  
}

// function getImageUrl(imageId:string) {
//   return (
//     '../Figma Components/' +
//     imageId +
//     '.png'
//   );
// }

const LandingPageProducts: React.FC<LandingPageProductsprops> = ({ label, ContactLink, label2}) => {
    return (
        <Card className="sm">
            <Card.Img 
                src={require('../Figma Components/casco1.png')} 
                className="ImageEquipment img-fluid" 
                alt="Product image" 
            />
            <Card.Body className="ProductCardBody" style={{maxHeight:'100px'}}>
                <Card.Title className="ProductName text-white" style={{ fontSize: 'calc(0.75rem + 0.5vw)' }}>
                    {label}
                </Card.Title>
                <Button href={ContactLink} className="CardLink mt-auto " style={{ fontSize:'calc(0.75rem + 0.5vw)', textDecoration:'none' }}>
                    {label2}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default LandingPageProducts;
