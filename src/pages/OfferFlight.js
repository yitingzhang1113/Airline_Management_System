import React, { useState } from 'react';

export default function OfferFlight() {
  const [flightID, setFlightID] = useState('');
  const [routeID, setRouteID] = useState('');
  const [cost, setCost] = useState('');

  const handleOfferFlight = () => {
    alert(`OfferFlight: flight=${flightID}, route=${routeID}, cost=${cost}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Offer Flight</h2>

      <div>
        <label>Flight ID: </label>
        <input
          type="text"
          value={flightID}
          onChange={(e) => setFlightID(e.target.value)}
        />
      </div>
      <div>
        <label>Route ID: </label>
        <input
          type="text"
          value={routeID}
          onChange={(e) => setRouteID(e.target.value)}
        />
      </div>
      <div>
        <label>Cost: </label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>

      <button onClick={handleOfferFlight}>Add</button>
    </div>
  );
}
