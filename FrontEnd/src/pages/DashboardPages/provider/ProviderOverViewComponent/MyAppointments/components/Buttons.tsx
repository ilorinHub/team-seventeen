import * as React from "react";
import "./Buttons.css";
const Buttons = (props: {
  moreIconLine: string,
  moreIconLine1: string,
  button: string,
  className?: string,
}) => {
  return (
    <div className={`buttons ${props.className || ""}`}>
      {props.button || "View all"}
    </div>
  );
};
export default Buttons;
