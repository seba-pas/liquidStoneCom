import React, { useState, useEffect } from "react";
import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 1000);
  }, []);

  return (
    <div id="menu">
      <ul className={`list ${showList ? "show" : ""}`}>
        <Link to="/products">
          <li style={{textDecoration: 'none'}}>Productos</li>
        </Link>
        <Link to='/kits'>
        <li style={{textDecoration: 'none'}}>Kits</li>

        </Link>
      </ul>
    </div>
  );
}
