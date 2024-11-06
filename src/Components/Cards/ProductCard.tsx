import React from "react";
import { Card, Button } from 'react-bootstrap'; // Importamos Card y Button de React Bootstrap
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para la navegación
import './ProductCard.css';

interface ProductCardprops {
    label: string;
    ProductLink: string;
    label2: string;
}

const ProductCard: React.FC<ProductCardprops> = ({ label, ProductLink, label2 }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/Display'); // Navega a la ruta /Display
    };

    return (
        <Card className="Product sm">
            <Card.Img 
                src={require('../Figma Components/casco1.png')} 
                className="ImageEquipment img-fluid" 
                alt="Product image" 
            />
            <Card.Body className="ProductCardBody" style={{ maxHeight: '100px' }}>
                <Card.Title className="ProductCardName text-black" style={{ height: '72px', marginBottom: '68px' }}>
                    {label}
                </Card.Title>
                <Button onClick={handleNavigate} className="ProductCardLink mt-auto text-black" style={{ fontSize: '16px', textDecoration: 'none', marginTop: '50px' }}>
                    {label2}
                </Button>
            </Card.Body>
            <div style={{ width: '220px', backgroundColor: 'rgba(255, 113, 0, 1)', height: '5px', marginTop: '76.5px' }}></div>
        </Card>
    );
};

export default ProductCard;
