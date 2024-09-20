import React from "react";
import './Button.css'; // TODO: Create CSS folder for components

interface ButtonProps {
    label: string;
    variant?: 'ImageButton' | 'GetStarted'| 'TextButton' | 'IconButton';
    // TODO: Divide buttons in 'TextButton'|'Button'|'ImageButton'|'IconButton'
    size?: 'small' | 'medium' | 'large' | 'image';
    onClick: () => void;
    imageSrc?: string;   // Para la imagen en ImageButton
    icon?: string;
    linkname?: string;
}
const Button: React.FC<ButtonProps> = ({ label,  variant, size, onClick, imageSrc, icon, linkname}) => {
    const getButtonClass = () => {
        let baseClass = 'btn';
        switch (variant) {
            case 'ImageButton':
            baseClass += ' btn-Img';
            break;
            case 'GetStarted':
            baseClass += ' btn-get-started';
            break;
            case 'TextButton':
            baseClass += ' btn-Text';
            break;
            case 'IconButton':
            baseClass += ' btn-Icon';
            break;
            default:
            break;
        }
        if (size === 'small') baseClass += ' btn-small';
        else if (size === 'large') baseClass += ' btn-large';
        else if (size === 'medium') baseClass += ' btn-medium';
        else if (size === 'image') baseClass += ' btn-image';

        return baseClass;
    };
      return (
        <a href={linkname} target="_blank" rel="noopener noreferrer">
        <button className={getButtonClass()} onClick={onClick}>
          {/* Renderizar imagen si es un ImageButton */}
          {variant === 'ImageButton' && imageSrc && (
            <img src={imageSrc} alt="ButtonImage" className="button-image" />
          )}
          {/* Renderizar ícono si es un IconButton */}
          {variant === 'IconButton' && icon && linkname && (
           <i className={icon} ></i>
          )}
          {/* Mostrar el texto (label) */}
          {label}
        </button>
        </a>
      );
    };
    
    export default Button;
