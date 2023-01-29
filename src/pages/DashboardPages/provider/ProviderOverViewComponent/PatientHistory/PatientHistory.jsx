import * as React from "react";
import "./App.css";
import ellipse172 from "./assets/ellipse172.svg";
import ellipse171 from "./assets/ellipse171.svg";
import ellipse17 from "./assets/ellipse17.svg";
import group18 from "./assets/group18.svg";
const PatientHistory = () => {
  return (
    <div className="frame-8654">
      <div className="frame-8637">
        <span className="patient-history">Patient History</span>
        <select className="frame-8632">
          <option>This month</option>
        </select>
      </div>
      <div className="flex-container">
        <img className="group-18" src={group18} />
        <div className="frame-8652">
          <div className="flex-container-1">
            <img className="ellipse-17" src={ellipse17} />
            <span className="admitted-patients">Admitted Patients</span>
          </div>
          <span className="num-26">26</span>
          <div className="flex-container-2">
            <img className="ellipse-171" src={ellipse171} />
            <span>Injections</span>
          </div>
          <span className="num-12">12</span>
          <div className="flex-container-3">
            <img className="ellipse-172" src={ellipse172} />
            <span>Active Surgeries</span>
          </div>
          <span className="nraviuziwfkmz">8</span>
        </div>
      </div>
    </div>
  );
};
export default PatientHistory;
