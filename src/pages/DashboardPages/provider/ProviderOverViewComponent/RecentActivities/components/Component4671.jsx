import * as React from "react";
import "./Component4671.css";
const Component4671 = (props: { admitted: string, className?: string }) => {
  return (
    <button className={`component-4671 ${props.className || ""}`}>
      {props.admitted || "Admitted"}
    </button>
  );
};
export default Component4671;
