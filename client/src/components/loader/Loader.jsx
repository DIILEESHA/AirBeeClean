import React, { useState } from "react";
import "./load.css";
import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
  let [color, setColor] = useState("#fae084");
  return (
    <div className="l">
      <HashLoader color={color} size={100} />
      {/* <h2 className="loading">loading please wait</h2> */}
    </div>
  );
};

export default Loader;
