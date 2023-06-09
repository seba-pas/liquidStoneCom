import React from 'react'
import Header from '../Header/Header'
import Title from '../title/Title'
import AboutUs from '../about us/AboutUs'
import MESADA from '../../photos/mesada.jpg'
import Grid from '../grid/Grid'

function Home() {
  return  (
    <>
      <Header />
      <Title />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          marginTop: "30px",
          justifyContent: "space-betweeen",
          alignSelf: "center",
          alignContent: "center",
          marginLeft: "10%",
        }}
      >
        <AboutUs />

        <img
          src={MESADA}
          alt="trabajo"
          style={{
            width: "40%",
            height: "700px",
            margin: "20px",
            marginTop: "70px",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ width: "100%" }}>
        <Grid />
      </div>

      {/* <UpperBody /> */}
    </>
  );
}

export default Home