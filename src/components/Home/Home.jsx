import React from "react";
import Header from "../Header/Header";
import Title from "../title/Title";
import AboutUs from "../about us/AboutUs";
import MESADA from "../../photos/mesada.jpg";
import Grid from "../grid/Grid";
import './home.css'

function Home() {
  return (
    <>
      <Header />
      <Title />
      <div className="about-pic">
        <AboutUs />

        <img src={MESADA} alt="trabajo" className="imagen-about" />
      </div>
      <div style={{ width: "100%" }}>
        <Grid />
      </div>

      {/* <UpperBody /> */}
    </>
  );
}

export default Home;
