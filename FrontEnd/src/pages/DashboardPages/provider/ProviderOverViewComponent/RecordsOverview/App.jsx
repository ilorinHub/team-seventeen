import * as React from "react";
import "./App.css";
import group16 from "./assets/group16.svg";
import group161 from "./assets/group161.svg";
import group162 from "./assets/group162.svg";
import group163 from "./assets/group163.svg";
const RecordsOverview = () => {
  return (
    <div className="frame-8645">
      <div className="frame-8644">
        <span>Records Overview +20.8%</span>
        <select className="frame-8632">
          <option>This month</option>
        </select>
      </div>
      <div className="flex-container">
        <div className="frame-8640">
          <img className="group-163" src={group163} />
          <div className="flex-container-1">
            <span className="total-patients">Total Patients</span>
            <span className="num-345-o">345o</span>
          </div>
        </div>
        <div className="frame-8634">
          <img className="group-16" src={group16} />
          <div className="flex-container-2">
            <span className="new-patients">New Patients</span>
            <span className="num-5-o">5o</span>
          </div>
        </div>
      </div>
      <div className="flex-container-3">
        <div className="frame-8642">
          <img className="group-161" src={group161} />
          <div className="flex-container-4">
            <span className="total-male">Total Male</span>
            <span className="num-25-oo">25oo</span>
          </div>
        </div>
        <div className="frame-8643">
          <img className="group-162" src={group162} />
          <div className="flex-container-5">
            <span className="total-female">Total Female</span>
            <span className="num-95-o">95o</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecordsOverview;
