import React, { useState } from 'react';

export default function GrantOrRevokeLicense() {
  const [personID, setPersonID] = useState('');
  const [licenseType, setLicenseType] = useState('');

  const handleGrant = () => {
    alert(`Grant license: person=${personID}, type=${licenseType}`);
    // TODO: 后端API
  };

  const handleRevoke = () => {
    alert(`Revoke license: person=${personID}, type=${licenseType}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Grant/Revoke Pilot License</h2>
      <div>
        <label>Person ID: </label>
        <input
          type="text"
          value={personID}
          onChange={(e) => setPersonID(e.target.value)}
        />
      </div>
      <div>
        <label>License Type: </label>
        <input
          type="text"
          value={licenseType}
          onChange={(e) => setLicenseType(e.target.value)}
        />
      </div>

      <button onClick={handleGrant}>Grant</button>
      <button onClick={handleRevoke}>Revoke</button>
    </div>
  );
}
