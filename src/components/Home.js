import React from "react";
import "./Home.css";

function Home() {
  return (
    <header className="home-header">
      <div className="home-content">
        <h1>Multimodal Skin Diagnosis Kiosk</h1>
        <p>
          AI-powered, biosensor-enabled, and decentralized token-secured skin
          health for a personalized future.
        </p>
      </div>

      <div className="home-image">
       
        <img src={`${process.env.PUBLIC_URL}/nir13.png`} alt="Skin Diagnosis" />
      </div>
    </header>
  );
}

export default Home;





