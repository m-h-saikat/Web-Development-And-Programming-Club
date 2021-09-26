import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./ProgrammerDetails.css";

const Programmer = (props) => {
  //Get data by props
  const { Name, Age, Country, Role, Salary, img ,Expert } = props.programmerList;
  // Get Name, Age, Country, Role, Salary, img ,Expert by destructuring
  return (
    <div className="container">
      <div className="row">
        <div className="Programmer-info col   me-3 mt-3 p-3 ms-3 border rounded shadow p-3   rounded">
          <div>
            <img src={img} alt="" width="130" height="130" />
          </div>
          <div>
            <h4 className=" text-danger text-uppercase  ">
              <b>{Name}</b> 
            </h4>
            <p>
            
            <small>Expert in</small > <b><span className="text-primary"> {Expert}</span></b>
          </p>
            <p>
               
              <small>Role By.</small > <b><span className="text-success"> {Role}</span></b> 
            </p>
           
            <p>
              <b>Country:</b> {Country}
            </p>
            <p>
              <b>Age:</b> {Age}
            </p>
            <p>
              <b>Salary: </b>${Salary}
            </p>
            <button
              onClick={() => props.AddToHiredProgrammer(props.programmerList)}
              className="btn btn-warning btn-outline-dark"
            >

              Hire Me <FontAwesomeIcon icon={faUserPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programmer;





