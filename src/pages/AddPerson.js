import React, { useState } from 'react';

export default function AddPerson() {
  const [personID, setPersonID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleAddPerson = () => {
    alert(`AddPerson: id=${personID}, name=${firstName} ${lastName}`);
    // TODO: 后端API
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Add Person</h2>

      <div>
        <label>Person ID: </label>
        <input
          type="text"
          value={personID}
          onChange={(e) => setPersonID(e.target.value)}
        />
      </div>

      <div>
        <label>First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label>Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <button onClick={handleAddPerson}>Add</button>
    </div>
  );
}
