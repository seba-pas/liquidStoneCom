import React from "react";
import "./grid.css";

export default function Grid() {
  return (
    <div className='gridWrap'>
      <div className="gridContainer">
        <div className="sq1"><p className='prod'>KITS</p></div>
        <div className="sq2"><p className='prod'>TUTORIALES</p></div>
      </div>
      <div className="gridContainer">
        <div className="sq2"><p className='prod'>EXOTICOS</p></div>
        <div className="sq1"><p className='prod'>MARMOL</p></div>
      </div>
    </div>
  );
}
