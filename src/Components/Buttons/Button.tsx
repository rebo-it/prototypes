import React from "react";
import './Button.css'; 
interface ButtonProps {
    label: string;
    variant?: 'HeaderButton' | 'GetStarted'| 'Apply' | 'LearnMore';
    size?: 'small' | 'medium' | 'large';
  
}
const Button: React.FC<ButtonProps> = ({ label,  variant, size}) => {
    const getButtonClass = () => {
        let baseClass = 'btn';
        switch (variant) {
            case 'HeaderButton':
            baseClass += ' btn-header';
            break;
            case 'GetStarted':
            baseClass += ' btn-get-started';
            break;
            case 'Apply':
            baseClass += ' btn-apply';
            break;
            case 'LearnMore':
            baseClass += ' btn-learn-more';
            break;
            default:
            break;
        }
        if (size === 'small') baseClass += ' btn-small';
        else if (size === 'large') baseClass += ' btn-large';
        else if (size === 'medium') baseClass += ' btn-medium';

        return baseClass;
    };
    return (
        <button className={getButtonClass()} >
          {label}
        </button>
      );
    };
    
    export default Button;
