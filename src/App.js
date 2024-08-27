import React, { useState } from 'react';
import './App.css'; // Optional for styling

function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [simDetails, setSimDetails] = useState(null);

  const handleStart = () => {
    setIsProcessing(true);

    // Simulating hardware processing
    setTimeout(() => {
      // Simulate fetching SIM details from hardware
      const fetchedDetails = {
        mcc: '404', // Mobile Country Code (Example: India)
        mnc: '10',  // Mobile Network Code (Example: Jio)
        cid: '2050', // Cell ID
        lac: '10021' // Location Area Code
      };
      setSimDetails(fetchedDetails);
      setIsProcessing(false);
    }, 3000); // Simulated processing time
  };

  return (
    <div className="App">
      <h1>SIM Card Details</h1>
      {!simDetails && (
        <button onClick={handleStart} disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Start'}
        </button>
      )}
      {simDetails && (
        <div className="sim-details">
          <h2>SIM Details</h2>
          <p><strong>MCC:</strong> {simDetails.mcc}</p>
          <p><strong>MNC:</strong> {simDetails.mnc}</p>
          <p><strong>CID:</strong> {simDetails.cid}</p>
          <p><strong>LAC:</strong> {simDetails.lac}</p>
        </div>
      )}
    </div>
  );
}

export default App;
