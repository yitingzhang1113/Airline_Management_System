import React, { useState } from 'react';

export default function FlightTakeoff() {
  const [flightID, setFlightID] = useState('');

  const handleTakeoff = () => {
    alert(`FlightTakeoff: flightID=${flightID}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Flight Takeoff</h2>
      <div>
        <label>Flight ID: </label>
        <input
          type="text"
          value={flightID}
          onChange={(e) => setFlightID(e.target.value)}
        />
      </div>
      <button onClick={handleTakeoff}>Takeoff</button>
    </div>
  );
}
