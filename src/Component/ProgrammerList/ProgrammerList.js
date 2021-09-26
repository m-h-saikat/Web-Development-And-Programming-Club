import React, { useEffect, useState } from "react";
import "./ProgrammerList.css";

import HiredProgrammer from "../HiredProgrammer/HiredProgrammer";
import ProgrammerDetails from "../ProgrammerDetails/ProgrammerDetails";

const ProgrammerList = () => {
  const [programmerList, setProgrammerList] = useState([]);
  const [hiredProgrammer, setHiredProgrammer] = useState([]);
  useEffect(() => {
    fetch("./programmers.json")
      .then((res) => res.json())
      .then((data) => setProgrammerList(data));
  }, []);

  const AddToHiredProgrammer = (programmerDetails) => {
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
