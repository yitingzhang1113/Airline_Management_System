import React, { useState } from 'react';

export default function AddAirport() {
  const [airportID, setAirportID] = useState('');
  const [airportName, setAirportName] = useState('');

  const handleAddAirport = () => {
    alert(`AddAirport: id=${airportID}, name=${airportName}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Add Airport</h2>

      <div>
        <label>Airport ID: </label>
        <input
          type="text"
          value={airportID}
          onChange={(e) => setAirportID(e.target.value)}
        />
      </div>

      <div>
        <label>Airport Name: </label>
        <input
          type="text"
          value={airportName}
          onChange={(e) => setAirportName(e.target.value)}
        />
      </div>

      <button onClick={handleAddAirport}>Add</button>
    </div>
  );
}
