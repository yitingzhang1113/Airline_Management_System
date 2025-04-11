import React, { useState } from 'react';

export default function RecycleCrew() {
  const [flightID, setFlightID] = useState('');

  const handleRecycle = () => {
    alert(`RecycleCrew: flightID=${flightID}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Recycle Crew</h2>
      <div>
        <label>Flight ID: </label>
        <input
          type="text"
          value={flightID}
          onChange={(e) => setFlightID(e.target.value)}
        />
      </div>
      <button onClick={handleRecycle}>Recycle</button>
    </div>
  );
}
