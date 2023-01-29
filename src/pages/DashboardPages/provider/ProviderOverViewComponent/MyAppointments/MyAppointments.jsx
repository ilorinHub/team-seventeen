import * as React from "react";
import "./App.css";
import ellipse85 from "./assets/ellipse85.png";
import ellipse81 from "./assets/ellipse81.png";
import ellipse91 from "./assets/ellipse91.svg";
import ellipse9 from "./assets/ellipse9.svg";
import ellipse82 from "./assets/ellipse82.png";
import ellipse92 from "./assets/ellipse92.svg";
import ellipse83 from "./assets/ellipse83.png";
import ellipse84 from "./assets/ellipse84.png";
import ellipse8 from "./assets/ellipse8.png";
const MyAppointments = () => {

  return (
    <div className="frame-8670 ">
      <div className="flex-container">
        <span className="my-appointments">My Appointments</span>
      </div>
      <div className="flex-container-1">
        <span className="patients">Patients</span>
        <span className="time">Time</span>
        <span className="status">Status</span>
      </div>
      <div className="frame-8590">
        <img className="ellipse-8" src={ellipse8} />
        <div className="flex-container-2">
          <span className="isaac-john">Isaac John</span>
          <span className="id-2876">ID: 2876</span>
        </div>
        <span className="num-830-am-900-am">8:30 am - 9:00 am</span>
        <img className="ellipse-9" src={ellipse9} />
        <span className="approved">Approved</span>
      </div>
      <div className="frame-8592">
        <img className="ellipse-81" src={ellipse81} />
        <div className="flex-container-3">
          <span className="patrick-stewart">Patrick Stewart</span>
          <span className="id-2876-1">ID: 2876</span>
        </div>
        <span className="num-830-am-900-am-1">8:30 am - 9:00 am</span>
        <img className="ellipse-91" src={ellipse91} />
        <span className="need-approval">Need Approval</span>
      </div>
      <div className="frame-8593">
        <img className="ellipse-82" src={ellipse82} />
        <div className="flex-container-4">
          <span>Jessica Good</span>
          <span className="id-2876-2">ID: 2876</span>
        </div>
        <span className="num-830-am-900-am-2">8:30 am - 9:00 am</span>
        <img className="ellipse-92" src={ellipse92} />
        <span className="new">New</span>
      </div>
      <div className="frame-8594">
        <img className="ellipse-83" src={ellipse83} />
        <div className="flex-container-5">
          <span>Adebayo Goke</span>
          <span className="id-2876-3">ID: 2876</span>
        </div>
        <span className="num-830-am-900-am-3">8:30 am - 9:00 am</span>
        <img className="ellipse-93" src={ellipse9} />
        <span className="approved-1">Approved</span>
      </div>
      <div className="frame-8592-1">
        <img className="ellipse-84" src={ellipse84} />
        <div className="flex-container-6">
          <span>Chioma Ude</span>
          <span className="id-2876-4">ID: 2876</span>
        </div>
        <span className="num-830-am-900-am-4">8:30 am - 9:00 am</span>
        <img className="ellipse-94" src={ellipse91} />
        <span className="need-approval-1">Need Approval</span>
      </div>
      <div className="frame-8593-1">
        <img className="ellipse-85" src={ellipse85} />
        <div className="flex-container-7">
          <span className="funke-ayolola">Funke Ayolola</span>
          <span className="id-2876-5">ID: 2876</span>
        </div>
        <span className="num-830-am-900-am-5">8:30 am - 9:00 am</span>
        <img className="ellipse-95" src={ellipse92} />
        <span className="new-1">New</span>
      </div>
    </div>
  );
};
export default MyAppointments;
