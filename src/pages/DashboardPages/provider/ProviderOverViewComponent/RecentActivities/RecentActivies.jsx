import * as React from "react";
import "./App.css";
import ellipse81 from "./assets/ellipse81.png";
import group13 from  "./assets/group13.svg";
import moreIconLine1 from  "./assets/moreIconLine1.svg";
import iconButtons from  "./assets/iconButtons.svg";
import group133 from  "./assets/group133.svg";
import group131 from  "./assets/group131.svg";
import moreIconLine from  "./assets/moreIconLine.svg";
import ellipse82 from  "./assets/ellipse82.png";
import ellipse8 from  "./assets/ellipse8.png";
import ellipse83 from  "./assets/ellipse83.png";
import group132 from "./assets/group132.svg";
import Component4671 from  "./components/Component4671";
import Component3 from "./components/Component3";
import Component468 from "./components/Component468";
import Component4682 from "./components/Component4682";
import Component467 from "./components/Component467";
import Component4681 from "./components/Component4681";
const RecentActivies = () => {
  const propsData = {
    component3: {
      moreIconLine: moreIconLine,
      search: "Search",
    },
    component468: {
      high: "High",
    },
    component467: {
      discharged: "Discharged",
    },
    component469: {
      medium: "Medium",
    },
    component4671: {
      admitted: "Admitted",
    },
    component4681: {
      low: "Low",
    },
    component4672: {
      discharged: "Discharged",
    },
    component4682: {
      high: "High",
    },
    component4673: {
      admitted: "Admitted",
    },
  };
  return (
    <div className="frame-8641">
      <div className="frame-8593">
        <span className="recent-activities">Recent Activities</span>
        <Component3
          className="component-3-instance-1"
          {...propsData.component3}
        />
      </div>
      <div className="flex-container">
        <span className="name">Name</span>
        <span className="start-date">Start Date</span>
        <span className="end-date">End Date</span>
        <span>Priority</span>
        <span className="progress">Progress</span>
        <span className="status">Status</span>
        <span className="action">Action</span>
      </div>
      <div className="frame-8599">
        <img className="ellipse-8" src={ellipse8} />
        <div className="flex-container-1">
          <span className="olagunju-damilola">Olagunju Damilola</span>
          <span className="id-2876">ID: 2876</span>
        </div>
        <span className="jan-192023">Jan 19,2023</span>
        <span className="feb-202023">Feb 20,2023</span>
        <Component468
          className="component-468-instance-1"
          {...propsData.component468}
        />
        <img className="group-13" src={group13} />
        <span className="num-82">82%</span>
        <Component467
          className="component-467-instance-1"
          {...propsData.component467}
        />
        <img className="more-icon-line-1" src={moreIconLine1} />
        <img className="icon-buttons" src={iconButtons} />
      </div>
      <div className="frame-8598">
        <img className="ellipse-81" src={ellipse81} />
        <div className="flex-container-2">
          <span>Tiwalola Ogunbayo</span>
          <span className="id-2876-1">ID: 2876</span>
        </div>
        <span className="feb-122023">Feb 12,2023</span>
        <span className="cnjxrkwoetnmu">-----</span>
        <Component4681
          className="component-469-instance-1"
          {...propsData.component469}
        />
        <img className="group-131" src={group131} />
        <span className="num-65">65%</span>
        <Component4671
          className="component-4671-instance-1"
          {...propsData.component4671}
        />
        <img className="more-icon-line-2" src={moreIconLine1} />
        <img className="icon-buttons-1" src={iconButtons} />
      </div>
      <div className="frame-8597">
        <img className="ellipse-82" src={ellipse82} />
        <div className="flex-container-3">
          <span className="adebayo-olatunji">Adebayo Olatunji</span>
          <span className="id-2876-2">ID: 2876</span>
        </div>
        <span className="feb-122023-1">Feb 12,2023</span>
        <span className="feb-22-2023">Feb 22, 2023</span>
        <Component4682
          className="component-4681-instance-1"
          {...propsData.component4681}
        />
        <img className="group-132" src={group132} />
        <span className="num-94">94%</span>
        <Component467
          className="component-4672-instance"
          {...propsData.component4672}
        />
        <img className="more-icon-line-3" src={moreIconLine1} />
        <img className="icon-buttons-2" src={iconButtons} />
      </div>
      <div className="frame-8596">
        <img className="ellipse-83" src={ellipse83} />
        <div className="flex-container-4">
          <span>Olabisi Tinuola</span>
          <span className="id-2876-3">ID: 2876</span>
        </div>
        <span className="feb-122023-2">Feb 12,2023</span>
        <span className="qdcezkytmvhmo">-----</span>
        <Component468
          className="component-4682-instance"
          {...propsData.component4682}
        />
        <img className="group-133" src={group133} />
        <span className="num-77">77%</span>
        <Component4671
          className="component-4673-instance"
          {...propsData.component4673}
        />
        <img className="more-icon-line-4" src={moreIconLine1} />
        <img className="icon-buttons-3" src={iconButtons} />
      </div>
    </div>
  );
};
export default RecentActivies;
