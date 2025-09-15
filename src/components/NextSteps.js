import React from "react";
import "./NextSteps.css";

function NextSteps() {
  const steps = [
    {
      title: "Prototype POC",
      description:
        "Deploy Derma Unit SSC 3 with EEG sensors and kiosk integration to validate multimodal data capture and analysis.",
      images: [
        process.env.PUBLIC_URL + "/nir09.png"
      ],
    },
    {
      title: "Pilot Deployment",
      description:
        "Launch pilots in dermatology clinics and wellness centers to gather real-world insights and refine recommendations.",
      images: [
        process.env.PUBLIC_URL + "/nir10.png",
        
      ],
    },
    {
      title: "Collaboration",
      description:
        "Partner with skincare brands and research institutions to integrate Alphie tokenized data, enhancing trust and enabling data-driven product innovation.",
      images: [
        process.env.PUBLIC_URL + "/nir11.png",
      ],
    },
  ];

  const fallback = "https://via.placeholder.com/120";

  return (
    <div className="nextsteps-section">
      <h1 className="nextsteps-section-title">Next Steps</h1>
      <div className="cards-container">
        {steps.map((step, index) => (
          <div className="card" key={index}>
            <div className="card-images">
              {step.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${step.title} ${idx + 1}`}
                  onError={(e) => (e.target.src = fallback)}
                />
              ))}
            </div>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NextSteps;



