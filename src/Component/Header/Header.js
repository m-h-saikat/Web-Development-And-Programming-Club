import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header mx-auto  bg-info p-3">
      <h1>Web Development And Programming Club </h1>
      <p>
        <b>
          WDPC is the most primitive and extensive club as well as the biggest
          club in XYZ International University
        </b>
      </p>
      <hr />
      <h2>
        Total Budget : <span className="Budget text-danger">$500</span>
      </h2> 
    </div>
  );
};

export default Header;
