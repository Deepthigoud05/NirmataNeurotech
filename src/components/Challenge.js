import React from "react";
import "./Challenge.css";

function Challenge() {
  return (
    <div>
      <div className="challenge-section">
        <h1>The Challenge</h1>
        <p>
          Skin conditions affect over <b>1.9 billion people globally</b>, ranking
          as the <b>4th leading cause of non-fatal disease burden</b> worldwide
          PMC. In India, the prevalence of dermatological disorders ranges from{" "}
          <b>6.3% to 11.2% of the general population</b>, with{" "}
          <b>about 32.4% reporting sensitive or very sensitive skin</b>—
          extrapolated to approximately 400 million people PMCFrontiers.
        </p>
        <p>
          Traditional diagnostic methods rely heavily on{" "}
          <b>visual inspection and patient history</b>, often missing root causes
          like hydration, oil imbalance, stress, or sleep quality. These delays
          can worsen outcomes and strain both healthcare systems and personal
          well-being.
        </p>

        
        <div className="accurate-diagnosis-wrapper">
          <div className="accurate-diagnosis">
            <div className="diagnosis-image">
              <img src="/nir02.png" alt="Accurate Diagnosis" />
            </div>
            <div className="diagnosis-text">
              <h2>Accurate Skin Diagnosis</h2>
              <p>
                <strong>Global:</strong> Skin analysis often misses the link between internal factors (stress, hydration, sleep) and external influences (UV, pollution, diet). Most solutions lack multimodal integration and face data trust & privacy challenges in healthcare.
              </p>
              <p>
                <strong>India:</strong> With 400M+ people affected by skin issues, diagnosis is made harder by pollution, UV exposure, and lifestyle stress. Existing tools are cosmetic-focused, single-parameter, and adoption is slowed by privacy and infrastructure gaps.
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="holistic-section">
        <h2>Holistic Data Integration</h2>
        <div className="cards-container">
          <div className="card challenge-card">
            <h3>AI Image Analysis</h3>
            <p>Detects visual skin anomalies.</p>
          </div>
          <div className="card challenge-card">
            <h3>Biosensor Metrics</h3>
            <p>Measures hydration, sebum, and pH.</p>
          </div>
          <div className="card challenge-card">
            <h3>EEG Monitoring</h3>
            <p>Tracks stress, sleep, and irritation sensitivity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;




