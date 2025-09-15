import React from "react";
import "./About.css";

function About() {
  const fallback = "https://via.placeholder.com/500";

  return (
    <div className="about-section">
      <div className="solution-wrapper">
        <div className="solution-content">
          <div className="solution-text">
            <h1>Our Solution</h1>
            <p>
              Bringing AI, sensors, and secure data together for personalized skin health.
            </p>
            <p>
              Our kiosk combines <b>AI-powered image analysis (MAE + U-Net), biosensors</b> 
              for hydration, sebum, and pH, and <b>EEG monitoring</b> for stress and sleep quality. 
              By integrating these multimodal data streams, the system delivers 
              <b>accurate, personalized skin assessments</b>. All user data is protected with 
              <b>decentralized tokenization (Alphie)</b>, ensuring <b>privacy, trust, and secure ownership</b>.
            </p>
          </div>
          <div className="solution-image">
            <img
              src="/nir01.png"
              alt="Our Solution"
              onError={(e) => (e.target.src = fallback)}
            />
          </div>
        </div>
      </div>

      
      <h2>Clinical Performance</h2>
      <p>Key metrics demonstrating the impact of multimodal AI integration.</p>
      <div className="clinical-performance">
        <div className="performance-item">
          <span className="percentage">30%</span>
          <p>Multimodal AI combining <b>image analysis + biosensors + EEG</b> improves detection of hydration imbalance, sebum levels, pigmentation, and irritation.</p>
        </div>
        <div className="performance-item">
          <span className="percentage">10min</span>
          <p>Average time per user for a <b>complete kiosk evaluation</b>, offering fast and actionable insights.</p>
        </div>
        <div className="performance-item">
          <span className="percentage">25%</span>
          <p>Integrating <b>internal physiological data</b> reduces errors in identifying skin concerns versus traditional visual-only evaluation.</p>
        </div>
      </div>

    
      <div className="tech-security-wrapper">
        <div className="tech-security-content">
          <div className="tech-text">
            <h2>Technology & Data Security</h2>
            <p>
              Secure, AI-driven, and sensor-backed insights for personalized skin health.
            </p>
            <p>
              Our system integrates <b>MAE + U-Net AI</b> for precise <b>image segmentation and skin concern prediction</b>, 
              biosensors to measure hydration, sebum, and pH, and <b>EEG monitoring</b> to capture neurological factors affecting skin health. 
              Inspired by <b>Cyphae</b>, we implement a <b>decentralized, peer-to-peer data security layer</b> using <b>Alphie Tokens</b>, 
              ensuring <b>trust, privacy, and user-owned health data</b>.
            </p>
          </div>
          <div className="tech-image">
            <img
              src="/nir15.png"
              alt="Technology & Data Security"
              onError={(e) => (e.target.src = fallback)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;











