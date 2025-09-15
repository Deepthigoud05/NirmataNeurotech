import React from "react";
import "./UserJourney.css";

// Multimodal icons from assets folder
import AnalyticsIcon from "../assets/icons/analytics.png";
import AccuracyIcon from "../assets/icons/accuracy.png";
import SecurityIcon from "../assets/icons/security.png";
import TrustIcon from "../assets/icons/trust.png";

function UserJourney() {
  return (
    <div className="journey-section">
      {/* User Journey Timeline */}
      <h1 className="section-title">User Journey</h1>
      <div className="timeline">
        <div className="timeline-step left">
          <div className="content">
            <strong>Check-In & Scan:</strong>
            <p>
              Users visit the kiosk and complete a brief check-in, followed by a <b>facial</b> scan using the AI-powered camera system.
            </p>
          </div>
        </div>

        <div className="timeline-step right">
          <div className="content">
            <strong>Multimodal Data Capture:</strong>
            <p>
              <b>Biosensors</b> measure hydration, sebum, and pH, while <b>EEG</b> monitors stress and sleep-related neurological signals, capturing a holistic skin profile.
            </p>
          </div>
        </div>

        <div className="timeline-step left">
          <div className="content">
            <strong>Secure Results & Recommendations:</strong>
            <p>
              AI analyzes multimodal data to predict <b>skin severity and underlying causes</b>, delivering <b>personalized skincare recommendations</b>. All results are <b>securely stored</b> via <b>Alphie tokenization</b> for trust and privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Why Multimodal Section */}
      <h2 className="section-title">Why Multimodal?</h2>
      <div className="multimodal-info">
        <div className="multi-card">
          <img src={AnalyticsIcon} alt="Analytics" className="multi-icon" /><br />
          <strong>Comprehensive Data</strong>
          <p>
            Integrates <b>visual (AI image analysis), physiological (biosensors), and neurological (EEG) data</b> to provide a <b>complete skin health profile.</b>
          </p>
        </div>

        <div className="multi-card">
          <img src={AccuracyIcon} alt="Accuracy" className="multi-icon" /><br />
          <strong>Improved Accuracy</strong>
          <p>
            Enhances prediction precision by detecting <b>both visible symptoms and underlying causes</b>, enabling <b>personalized recommendations.</b>
          </p>
        </div>

        <div className="multi-card">
          <img src={SecurityIcon} alt="Security" className="multi-icon" /><br />
          <strong>Data Security</strong>
          <p>
            <b>Alphie tokenization</b> replaces personal identifiers, ensuring <b>privacy and compliance with HIPAA and GDPR standards</b>.
          </p>
        </div>

        <div className="multi-card">
          <img src={TrustIcon} alt="Trust" className="multi-icon" /><br />
          <strong>User Trust</strong>
          <p>
            A <b>decentralized architecture eliminates single-point breaches</b>, creating <b>verifiable ownership</b> of health data and fostering user confidence.
          </p>
        </div>
      </div>

      {/* Diagnosis Pipeline Timeline */}
      <h2 className="section-title">Diagnosis Pipeline</h2>
      <div className="timeline">
        <div className="timeline-step left">
          <div className="content">
            <img src="/nir03.png" alt="Facial Scan" className="pipeline-img" />
            <strong>STEP-1</strong>
            <p>
              The user begins the process with a <b>quick facial scan</b> at the kiosk, capturing high-resolution images for AI analysis.
            </p>
          </div>
        </div>

        <div className="timeline-step right">
          <div className="content">
            <img src="/nir05.png" alt="Biosensors & EEG" className="pipeline-img" />
            <strong>STEP-2</strong>
            <p>
              <b>Biosensors</b> measure hydration, sebum, and pH, while EEG monitors stress and sleep-related neurological factors to create a <b>holistic skin profile</b>.
            </p>
          </div>
        </div>

        <div className="timeline-step left">
          <div className="content">
            <img src="/nir04.png" alt="AI Analysis & Recommendations" className="pipeline-img" />
            <strong>STEP-3</strong>
            <p>
              The AI predicts <b>skin severity and underlying causes</b>, provides <b>personalized skincare recommendations</b>, and <b>securely stores data</b> using <b>Alphie tokenization</b> for trust and privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserJourney;
