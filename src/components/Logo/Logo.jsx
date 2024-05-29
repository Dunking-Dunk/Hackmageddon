import React from 'react';
import './Logo.css';
import hmglogo from '../../assets/images/hmglogo.webp';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={hmglogo} alt="Logo" className="logo-image" />
        </div>
    );
};

export default Logo;
