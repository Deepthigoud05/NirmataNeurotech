import React from "react";
import "./Benefits.css";

function Benefits() {
  const benefits = [
    {
      img: process.env.PUBLIC_URL + "/nir07.png",
      title: "For Patients",
      desc: "Faster, more accurate skin assessments with actionable insights to support better self-care and personalized skincare routines."
    },
    {
      img: process.env.PUBLIC_URL + "/nir08.png",
      title: "For Professionals",
      desc: "Reduces clinician workload while providing robust diagnostic support through holistic multimodal data."
    },
    {
      img: process.env.PUBLIC_URL + "/nir12.png",
      title: "For Data Privacy",
      desc: "Ensures secure, decentralized storage with tokenized data ownership, enhancing trust and compliance with privacy regulations."
    }
  ];

  const fallback = "https://via.placeholder.com/150";

  return (
    <div className="benefits-section">
      <h1 className="section-title">Expected Benefits</h1>

     
      <div className="benefits-list-horizontal">
        {benefits.map((item, idx) => (
          <div key={idx} className="benefit-item">
            <img
              src={item.img}
              alt={item.title}
              className="benefit-img"
              onError={(e) => (e.target.src = fallback)}
            />
            <div className="benefit-text">
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="alphie-section">
        <div className="alphie-image">
          <img
            src={process.env.PUBLIC_URL + "/nir06.png"}
            alt="Data Security"
            onError={(e) => (e.target.src = fallback)}
          />
        </div>
        <div className="alphie-text">
          <h2>Data Security with Alphie</h2>
          <p>
            Centralized healthcare systems are <b>vulnerable to misuse and breaches</b>. Our kiosk leverages a <b>Layer-1 decentralized protocol </b>for skin health data, enabling <b>peer-to-peer trust, on-chain intent tracking, and off-chain encrypted exchanges</b>. Users<b> own and tokenize their data</b>, gaining <b>full transparency, control, and new value opportunities</b> while maintaining <b>compliance with privacy regulations.</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;












