import React, { useEffect, useState } from 'react';

export default function FlightsOnTheGround() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // TODO: 后端API获取地面航班
    const mockData = [
      { flightID: 'nk_98', airport: 'IAH', arrival: '13:13:13' },
      { flightID: 'ke_64', airport: 'ICN', arrival: '16:00:00' }
    ];
    setFlights(mockData);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Flights on the Ground</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Airport</th>
            <th>Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f, idx) => (
            <tr key={idx}>
              <td>{f.flightID}</td>
              <td>{f.airport}</td>
              <td>{f.arrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
