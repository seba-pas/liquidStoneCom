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
          <li>Productos</li>
        </Link>
        <li>Kits</li>
      </ul>
    </div>
  );
}
