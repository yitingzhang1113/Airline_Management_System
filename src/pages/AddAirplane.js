import React, { useState } from 'react';
import { API_BASE_URL } from '../constant'; 
export default function AddAirplane() {
  const [airlineID, setAirlineID] = useState('');
  const [tailNum, setTailNum] = useState('');
  const [seatCapacity, setSeatCapacity] = useState('');
  const [speed, setSpeed] = useState('');
  const [locationID, setLocationID] = useState('');
  const [planeType, setPlaneType] = useState('');
  const [maintenanced, setMaintenanced] = useState(false);
  const [model, setModel] = useState('');
  const [neo, setNeo] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddAirplane = async () => {
    setMessage('');
    setError('');
    setLoading(true);

    if (!airlineID || !tailNum || !planeType) {
      setError('Airline ID, Tail Number, and Plane Type are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/procedures/add_airplane`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          airlineID: airlineID,
          tail_num: tailNum,
          seat_capacity: parseInt(seatCapacity) || 0,
          speed: parseInt(speed) || 0,
          locationID: locationID,
          plane_type: planeType,
          maintenanced: maintenanced,
          model: model,
          neo: neo,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message || 'Airplane added successfully!');
        setAirlineID('');
        setTailNum('');
        setSeatCapacity('');
        setSpeed('');
        setLocationID('');
        setPlaneType('');
        setMaintenanced(false);
        setModel('');
        setNeo(false);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to add airplane.');
      }
    } catch (err) {
      console.error('Error adding airplane:', err);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Add Airplane</h2>

      {message && <div style={{ color: 'green' }}>{message}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <div>
        <label>Airline ID: </label>
        <input
          type="text"
          value={airlineID}
          onChange={(e) => setAirlineID(e.target.value)}
        />
      </div>

      <div>
        <label>Tail Number: </label>
        <input
          type="text"
          value={tailNum}
          onChange={(e) => setTailNum(e.target.value)}
        />
      </div>

      <div>
        <label>Seat Capacity: </label>
        <input
          type="number"
          value={seatCapacity}
          onChange={(e) => setSeatCapacity(e.target.value)}
        />
      </div>

      <div>
        <label>Speed: </label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
      </div>

      <div>
        <label>Location ID: </label>
        <input
          type="text"
          value={locationID}
          onChange={(e) => setLocationID(e.target.value)}
        />
      </div>

      <div>
        <label>Plane Type: </label>
        <input
          type="text"
          value={planeType}
          onChange={(e) => setPlaneType(e.target.value)}
        />
      </div>

      <div>
        <label>Maintenanced: </label>
        <input
          type="checkbox"
          checked={maintenanced}
          onChange={(e) => setMaintenanced(e.target.checked)}
        />
      </div>

      <div>
        <label>Model: </label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>

      <div>
        <label>NEO: </label>
        <input
          type="checkbox"
          checked={neo}
          onChange={(e) => setNeo(e.target.checked)}
        />
      </div>

      <button onClick={handleAddAirplane} disabled={loading}>
        {loading ? 'Adding...' : 'Add'}
      </button>
    </div>
  );
}