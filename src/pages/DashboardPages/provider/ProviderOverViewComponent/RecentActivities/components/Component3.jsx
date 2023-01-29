import * as React from "react";
import "./Component3.css";
const Component3 = (props: {
  moreIconLine: string,
  search: string,
  className?: string,
}) => {
  return (
    <input
      className={`component-3 ${props.className || ""}`}
      placeholder={props.search || "Search"}
      type="text"
    />
  );
};
export default Component3;
