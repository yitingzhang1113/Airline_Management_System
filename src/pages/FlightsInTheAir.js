import React, { useState, useEffect } from 'react';

export default function FlightsInTheAir() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // TODO: 后端API获取航班数据
    // 演示数据：
    const mockData = [
      { flightID: 'dl_10', from: 'ATL', to: 'BCN', arrival: '08:00:00' },
      { flightID: 'lf_20', from: 'BCN', to: 'CDG', arrival: '11:00:00' }
    ];
    setFlights(mockData);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Flights in the Air</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Departing From</th>
            <th>Arriving At</th>
            <th>Earliest Arrival</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, idx) => (
            <tr key={idx}>
              <td>{flight.flightID}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.arrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
