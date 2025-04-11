import React, { useState } from 'react';

export default function PassengersBoard() {
  const [flightID, setFlightID] = useState('');

  const handleBoard = () => {
    alert(`PassengersBoard: flightID=${flightID}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Passengers Board</h2>
      <div>
        <label>Flight ID: </label>
        <input
          type="text"
          value={flightID}
          onChange={(e) => setFlightID(e.target.value)}
        />
      </div>
      <button onClick={handleBoard}>Board</button>
    </div>
  );
}
