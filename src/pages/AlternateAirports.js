import React, { useEffect, useState } from 'react';

export default function AlternateAirports() {
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    // TODO: 后端API获取备选机场
    const mockData = [
      { city: 'Chicago', state: 'Illinois', codes: ['MDW', 'ORD'] },
      { city: 'Houston', state: 'Texas', codes: ['HOU', 'IAH'] }
    ];
    setAirports(mockData);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Alternate Airports</h2>
      <table border="1">
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Codes</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((a, idx) => (
            <tr key={idx}>
              <td>{a.city}</td>
              <td>{a.state}</td>
              <td>{a.codes.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
