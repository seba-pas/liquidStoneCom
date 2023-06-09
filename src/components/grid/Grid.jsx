import React from "react";
import "./grid.css";

export default function Grid() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: '80%', marginLeft: '10%', marginBottom: '100px' }}>
      <div className="gridContainer">
        <div className="sq1"><p className='prod'>KITS</p></div>
        <div className="sq2"></div>
      </div>
      <div className="gridContainer">
        <div className="sq2"></div>
        <div className="sq1"></div>
      </div>
    </div>
  );
}
