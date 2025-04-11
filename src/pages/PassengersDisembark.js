import React, { useState } from 'react';

export default function PassengersDisembark() {
  const [flightID, setFlightID] = useState('');

  const handleDisembark = () => {
    alert(`PassengersDisembark: flightID=${flightID}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Passengers Disembark</h2>
      <div>
        <label>Flight ID: </label>
        <input
          type="text"
          value={flightID}
          onChange={(e) => setFlightID(e.target.value)}
        />
      </div>
      <button onClick={handleDisembark}>Disembark</button>
    </div>
  );
}
