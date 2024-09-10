import React from "react";
import './Button.css'; // TODO: Create CSS folder for components

interface ButtonProps {
    label: string;
    variant?: 'ImageButton' | 'GetStarted'| 'TextButton' | 'IconButton';
    // TODO: Divide buttons in 'TextButton'|'Button'|'ImageButton'|'IconButton'
    size?: 'small' | 'medium' | 'large';
    onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ label,  variant, size, onClick}) => {
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
        <button className={getButtonClass()} >
          {label}
        </button>
      );
    };
    
    export default Button;
