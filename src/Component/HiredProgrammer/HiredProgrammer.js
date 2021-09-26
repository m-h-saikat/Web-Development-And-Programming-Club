import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


import "./HiredProgrammer.css";

const HiredProgrammer = (props) => {
  const { hiredProgrammer } = props;

  let totalQuantity = 0;
  let total = 0;
  let CheckBudget ='';
  for (const programmer of hiredProgrammer) {
    if (!programmer.quantity) {
      programmer.quantity = 1;
    }
    total = total + programmer.Salary * programmer.quantity;
    totalQuantity = totalQuantity + programmer.quantity;
    if(parseInt(total)>500)
    {  CheckBudget =`budget is exceeded`}
    
  }

  return (
    <div className="container HiredProgrammer  me-5 mt-5 p-3 border rounded shadow p-3 mb-5  rounded">
      <h4>
        <b>
            
          <FontAwesomeIcon icon={faUsers} /> Total Programmers :
        </b>
        {totalQuantity}
      </h4>
      <h4>
        <b>Total Cost :</b> ${total.toFixed(2)}
      </h4>
      <br />
      <div className="HiredProgrammerList">
        <h4 className="text-danger">
            
          <b> Hired Programmer List</b>
        </h4>
        <hr />
        <ol type="None">
          {hiredProgrammer.map((programmer) => (
            <li key={programmer.Name}>
                
              <img src={programmer.img} height="30" weight="30" alt="" />
              <b>
                {programmer.Name}(${programmer.Salary})
              </b>
            </li>
          ))}
        </ol>
        <a href="https://mail.google.com/mail/u/0/#compose">  <button className="btn btn-danger">
          <FontAwesomeIcon icon={faEnvelope} /> Send Appoinment Letter
        </button></a>
        <div> <small className="text-danger"> <strong><br /> {CheckBudget} </strong></small></div>
  
      </div>
    </div>
  );
};

export default HiredProgrammer;
