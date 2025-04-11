import React, { useEffect, useState } from 'react';

export default function RouteSummary() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // TODO: 后端API获取航线概要
    const mockData = [
      { route: 'americas_one', numLegs: 2, routeLength: 4300 },
      { route: 'americas_hub_exchange', numLegs: 1, routeLength: 600 }
    ];
    setRoutes(mockData);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Route Summary</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Route</th>
            <th>Num Legs</th>
            <th>Route Length</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((r, idx) => (
            <tr key={idx}>
              <td>{r.route}</td>
              <td>{r.numLegs}</td>
              <td>{r.routeLength}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
