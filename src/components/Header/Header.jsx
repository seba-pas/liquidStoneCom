import React, { useState } from "react";
import "./header.css";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";
import Menu from "./Menu";
import LOGO from '../../photos/logo.png'
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BurguerMenu from "./BurguerMenu";

//TbBrandTiktok
//CiInstagram
export default function Header() {
  const [visible, setVisible] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  function toggleMenu() {
    setVisible(!visible);
  }

  return (
    <div className="container">
      <div className="items">
      <div className='burguer'>
        <BurguerMenu />
      </div>


        <Link to='/'>

        <img src={LOGO} alt='logo' style={{height:'60px', width:'60px'}}/>
        </Link>
        <button
          onClick={toggleMenu}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <span className="textNav">Productos</span>
        </button>
        {
          visible && <Menu />
        }

        <span className="textNav">Trabajos</span>
        <span className="textNav">Galeria</span>
        <span className="textNav">Contacto</span>
  
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "150px",
            borderColor: "black",
          }}

          
        >
          <a href="https://www.tiktok.com/@liquidstonearg?lang=es" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>

          <TbBrandTiktok style={{ fontSize: "25px" }} />
          </a>
          <a href="https://www.instagram.com/liquidstonearg/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
          <CiInstagram style={{ fontSize: "25px" }} />
          </a>
          <a href="https://wa.me/541158678838" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
          <FaWhatsapp style={{ fontSize: "25px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
