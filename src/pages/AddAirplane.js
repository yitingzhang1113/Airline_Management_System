import React, { useState } from 'react';

export default function AddAirplane() {
  const [tailNum, setTailNum] = useState('');
  const [planeType, setPlaneType] = useState('');

  const handleAddAirplane = () => {
    alert(`AddAirplane: tail=${tailNum}, type=${planeType}`);
    // TODO: 调用后端API插入数据库
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Add Airplane</h2>

      <div>
        <label>Tail Number: </label>
        <input
          type="text"
          value={tailNum}
          onChange={(e) => setTailNum(e.target.value)}
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

      {/* 其他字段... */}

      <button onClick={handleAddAirplane}>Add</button>
    </div>
  );
}
