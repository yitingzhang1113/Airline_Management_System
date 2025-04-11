import React from 'react';

export default function SimulationCycle() {
  const handleNextStep = () => {
    alert('SimulationCycle: next step triggered');
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Simulation Cycle</h2>
      <p>Press the button to proceed to the next simulation step.</p>
      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
}
