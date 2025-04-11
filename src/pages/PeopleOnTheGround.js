import React, { useEffect, useState } from 'react';

export default function PeopleOnTheGround() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // TODO: 后端API获取地面人员
    const mockData = [
      { personID: 'p1', location: 'ATL' },
      { personID: 'p2', location: 'ATL' }
    ];
    setPeople(mockData);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>People on the Ground</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Person ID</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, idx) => (
            <tr key={idx}>
              <td>{p.personID}</td>
              <td>{p.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
