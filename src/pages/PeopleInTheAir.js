import React, { useEffect, useState } from 'react';

export default function PeopleInTheAir() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // TODO: 后端API获取飞机上人员
    const mockData = [
      { personID: 'p27', flightID: 'lf_20', from: 'BCN', to: 'CDG' },
      { personID: 'p52', flightID: 'lf_20', from: 'BCN', to: 'CDG' }
    ];
    setPeople(mockData);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>People in the Air</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Person ID</th>
            <th>Flight ID</th>
            <th>Departing From</th>
            <th>Arriving At</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, idx) => (
            <tr key={idx}>
              <td>{p.personID}</td>
              <td>{p.flightID}</td>
              <td>{p.from}</td>
              <td>{p.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
