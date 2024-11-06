import React, { useState } from "react";

function MetCalculator() {
  const [speed, setSpeed] = useState(0); 
  const [met, setMet] = useState(0); 

  const handleSpeedChange = (entry: React.ChangeEvent<HTMLInputElement>) => {
    const inputSpeed = parseFloat(entry.target.value || "0"); 
    setSpeed(inputSpeed);
  
  

    
    const calculatedMet = 1 + (inputSpeed / 1.5);
    setMet(calculatedMet);
  };

  return (
    <div>
      <h3>MET calculator for running path</h3>
      <label>
        Speed (km/h):
        <input
          type="number"
          value={speed}
          onChange={handleSpeedChange}
          placeholder="Enter speed in km/h"
        />
      </label>
      <p>Calculated MET : {met.toFixed(2)}</p>
    </div>
  );
}

export default MetCalculator;
