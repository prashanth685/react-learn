// import React from "react";
// import "./new.css";

// const Stylesheet = (props) => {
//   let className = props.primary ? "primary" : "";
//   return <div className={className}>Stylesheet</div>;
// };

// export default Stylesheet;

import React from "react";

const Stylesheet = () => {
  const styling = {
    backgroundColor: "red",
    fontSize: "10px",
    width: "10px",
    height: "100px",
  };
  return <div style={styling}>Stylesheet</div>;
};

export default Stylesheet;
