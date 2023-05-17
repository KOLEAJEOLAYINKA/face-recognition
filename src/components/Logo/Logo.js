import React from "react";
import Tilt from "react-tilt";
import brain from "../../assert/[brain].png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Tilt
        className="Tilt"
        options={{ max: 60 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="brain img" />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
