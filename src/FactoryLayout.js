import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import sectionData from "./sectionData"; // Import section data

const FactoryLayout = () => {
  const [activeLight, setActiveLight] = useState(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const previewRef = useRef(null);
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const factoryRef = useRef(null);

const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);


  const lightPositions = [
    { top: "60%", left: "80%" }, // shipping
    { top: "32%", left: "65%" }, // office
    { top: "35%", left: "25%" }, // Raw Material receiving
    { top: "40%", left: "60%" }, // Material Handling
    { top: "50%", left: "30%" }, // batching and blending
    { top: "60%", left: "70%" }, // Packaging
    { top: "60%", left: "40%" }, // Processing
  ];

  // Close preview on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (previewRef.current && !previewRef.current.contains(event.target)) {
        setActiveLight(null);
      }
    };

    if (activeLight !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeLight]);

  // Resize handler to adjust light positions on window resize
  useEffect(() => {
    const updateContainerSize = () => {
      if (factoryRef.current) {
        const { width, height } = factoryRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    // Update on load and on resize
    window.addEventListener("resize", updateContainerSize);
    updateContainerSize(); // initial load

    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  // Calculate light position based on container size
  const getLightPosition = (index) => {
    const pos = lightPositions[index];
    const top = (parseFloat(pos.top) / 100) * containerSize.height;
    const left = (parseFloat(pos.left) / 100) * containerSize.width;
    return { top, left };
  };

  // Preview image positioning
  const getPreviewStyle = (index) => {
    const pos = lightPositions[index];
    const leftPercent = parseFloat(pos.left);
    const isLeftSide = leftPercent < 50;

    return {
      position: "absolute",
      top: pos.top,
      left: isLeftSide ? `calc(${pos.left} + 5%)` : undefined,
      right: isLeftSide ? undefined : `calc(100% - ${pos.left} + 5%)`,
      transform: "translateY(-50%)",
      zIndex: 999,
      background: "#fff",
      border: "2px solid #ccc",
      padding: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      width: "20%",
    };
  };

  return (
    <div className="page-wrapper">
      <div className="factory-container" ref={factoryRef}>
        <div className="image-wrapper">
          <img
            src="/BackgroundImage.png"
            alt="Factory Layout"
            className="factory-image"
          />

          {lightPositions.map((pos, index) => {
            const { top, left } = getLightPosition(index);
            return (
              <div
                key={index}
                className="blinking-light"
                style={{ top: `${top}px`, left: `${left}px` }}
                onClick={() => setActiveLight(index)}
              />
            );
          })}

          {activeLight !== null && (
            <div
              ref={previewRef}
              className="image-preview-container"
              style={getPreviewStyle(activeLight)}
            >
              <div className="image-hover-wrapper">
                <img
                  src={`/${sectionData[activeLight].image}`}
                  alt={`Preview ${activeLight + 1}`}
                  className="hover-image"
                  onClick={() => {
                    setModalImageIndex(activeLight);
                    setSelectedFeatureIndex(0); // Reset to first feature on open
                  }}                  
                />
                <div className="hover-details">
                  <h4>{sectionData[activeLight].title} – Features</h4>
                  <ul>
                    {sectionData[activeLight].features.map((item, idx) => (
                      <li key={idx}><strong>{item.title}</strong></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}


{modalImageIndex !== null && (
  <div className="modal-overlay" onClick={() => setModalImageIndex(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h3 className="modal-header">
        {sectionData[modalImageIndex].title} – Automation Features
      </h3>
      <button
        className="modal-close-btn"
        onClick={() => {
          setModalImageIndex(null);
          setSelectedFeatureIndex(0);
        }}
      >
        ✕
      </button>

      <div className="modal-body">
        <div className="modal-image-wrapper">
          <img
            src={`/${sectionData[modalImageIndex].image}`}
            alt={`Modal ${modalImageIndex + 1}`}
          />
        </div>

        <div className="modal-right">
          <div className="feature-buttons">
            {sectionData[modalImageIndex].features.map((feature, index) => (
              <div className="feature-line-button" key={index}>
                <div
                  className={`feature-line ${
                    index === selectedFeatureIndex ? 'active' : 'inactive'
                  }`}
                />
                <button
                  onClick={() => setSelectedFeatureIndex(index)}
                  className={`feature-btn ${
                    index === selectedFeatureIndex ? 'active' : ''
                  }`}
                >
                  {feature.title}
                </button>
              </div>
            ))}
          </div>

          <div className="model-card">
            <h3 style={{color :'#0e1c33' , fontStyle:'oblique'}}>{sectionData[modalImageIndex].features[selectedFeatureIndex]?.title}</h3>
            <p style={{marginRight :'10px'}}>
              {sectionData[modalImageIndex].features[selectedFeatureIndex]?.description
                ?.split('\n')
                .map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>

            <div className="model-card-nav">
              <button
                onClick={() =>
                  setSelectedFeatureIndex((prev) =>
                    prev > 0
                      ? prev - 1
                      : sectionData[modalImageIndex].features.length - 1
                  )
                }
              >
                ⬅
              </button>

              <span>
                {selectedFeatureIndex + 1} of {sectionData[modalImageIndex].features.length}
              </span>

              <button
                onClick={() =>
                  setSelectedFeatureIndex((prev) =>
                    prev < sectionData[modalImageIndex].features.length - 1
                      ? prev + 1
                      : 0
                  )
                }
              >
                ➡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default FactoryLayout;