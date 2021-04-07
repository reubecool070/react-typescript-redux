import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

export const Button: React.FC<ButtonProps> = ({ children, onClick, type, className }) => {
    const buttonType = type || 'default';

    return (
        <button className={`btn btn-${buttonType} ${className || ''}`} onClick={onClick}>{children}</button>
    );
}