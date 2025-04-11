import React, { useState } from 'react';

export default function AssignPilot() {
  const [flightID, setFlightID] = useState('');
  const [personID, setPersonID] = useState('');

  const handleAssign = () => {
    alert(`AssignPilot: flight=${flightID}, person=${personID}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Assign Pilot</h2>
      <div>
        <label>Flight ID: </label>
        <input
          type="text"
          value={flightID}
          onChange={(e) => setFlightID(e.target.value)}
        />
      </div>
      <div>
        <label>Person ID: </label>
        <input
          type="text"
          value={personID}
          onChange={(e) => setPersonID(e.target.value)}
        />
      </div>
      <button onClick={handleAssign}>Assign</button>
    </div>
  );
}
