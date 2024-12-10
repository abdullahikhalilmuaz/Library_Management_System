import React from "react";
import Headerone from "../components/Headerone";
const Notfound = () => {
  return (
    <div>
      <Headerone />
      <h2 style={{ textAlign: "center", border: "none", marginTop: "180px" }}>
        Oops!
      </h2>
      <h1 style={{ border: "none", fontFamily: "cursive" }}>
        Page Not Found <span style={{ color: "red" ,fontSize: '30px'}}>!!!</span>

      </h1>
    </div>
  );
};

export default Notfound;
