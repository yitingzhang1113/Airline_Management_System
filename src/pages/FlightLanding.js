import React, { useState } from 'react';

export default function FlightLanding() {
  const [flightID, setFlightID] = useState('');

  const handleLanding = () => {
    alert(`FlightLanding: flightID=${flightID}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Flight Landing</h2>
      <div>
        <label>Flight ID: </label>
        <input
          type="text"
          value={flightID}
          onChange={(e) => setFlightID(e.target.value)}
        />
      </div>
      <button onClick={handleLanding}>Land</button>
    </div>
  );
}
