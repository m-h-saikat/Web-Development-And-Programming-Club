import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
           <h1>Computer And Programming Club </h1> 
           <p>DIU CPC is the most primitive and extensive club as well as the biggest club in Daffodil International University</p>
           <h2>Total Budget : <span className="Budget">10 Million</span> </h2>
        </div>
    );
};

export default Header;