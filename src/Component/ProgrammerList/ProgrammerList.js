import React, { useEffect, useState } from "react";
import "./ProgrammerList.css";
import HiredProgrammer from "../HiredProgrammer/HiredProgrammer";
import ProgrammerDetails from "../ProgrammerDetails/ProgrammerDetails";

const ProgrammerList = () => {

  //stores a component's dynamic data
  const [programmerList, setProgrammerList] = useState([]);
  const [hiredProgrammer, setHiredProgrammer] = useState([]);

  //Get Data fro JSON File
  useEffect(() => {
    fetch("./programmers.json")
      .then((res) => res.json())
      .then((data) => setProgrammerList(data));
  }, []);

  const AddToHiredProgrammer = (programmerDetails) => {

    // Add HireProgrammer Number in  Total Programmers 
    const newHiredProgrammer = [...hiredProgrammer, programmerDetails];
    setHiredProgrammer(newHiredProgrammer);
  };

  return (
    <div className="Programmers-container">
      <div className="Programmer-container  ">
        {programmerList.map((programmerList) => (
          <ProgrammerDetails
            key={programmerList.key}
            programmerList={programmerList}
            AddToHiredProgrammer={AddToHiredProgrammer}
          ></ProgrammerDetails>
        ))}
      </div>
      <div className="HiredProgrammer-Container">
        <HiredProgrammer hiredProgrammer={hiredProgrammer}></HiredProgrammer>
      </div>
    </div>
  );
};

export default ProgrammerList;
