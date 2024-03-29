import React from "react";
import "../Miracle/miracle.css";
import Cardio from "../Cardio/Cardio";
import Galnce from "../Glance/Glance";

const Miracle = () => {
  return (
    <div className="miracle">
      <h1>Method to Miracle</h1>
      <div className="grid-container">
        <div className="grid-item">
          <ul>
            <li className="active">
              <h1>6 Grid</h1>
            </li>
            <li>

            </li>
          </ul>
          {/* Content for the first grid item */}
        </div>
        <div className="grid-item">
          <h2>6 Grid</h2>
          {/* Content for the second grid item */}
        </div>
      </div>
      <Cardio />
      <Galnce/>
    </div>
    
  );
};

export default Miracle;
