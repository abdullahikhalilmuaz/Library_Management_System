import React from "react";
import Headerone from "../components/Headerone";
export default function UnidentifiedUser() {
  return (
    <div>
      <Headerone />
      <h2 style={{ textAlign: "center", border: "none", marginTop: "180px" }}>
        Oops!
      </h2>
      <h1 style={{ border: "none", fontFamily: "cursive" }}>
        Account Not Found, <br />
        Visit the college library and register <br />
        <span style={{ color: "red", fontSize: "30px" }}>!!!</span>
      </h1>
    </div>
  );
}
