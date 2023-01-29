import * as React from "react";
import "./Component4682.css";
const Component4682 = (props: { low: string, className?: string }) => {
  return (
    <div className={`component-4682 ${props.className || ""}`}>
      {props.low || "Low"}
    </div>
  );
};
export default Component4682;
