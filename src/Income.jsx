import React, { useState } from 'react';

const Identity = () => {
  const [id, setId] = useState('');
  const [identityType, setIdentityType] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      id,
      identityType,
      identityNumber,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/Identity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully!', data);
        // Regenerate the page or perform any necessary actions
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Identity Type:</label>
        <input
          type="text"
          value={identityType}
          onChange={(e) => setIdentityType(e.target.value)}
          required
        />

        <label>Identity Number:</label>
        <input
          type="text"
          value={identityNumber}
          onChange={(e) => setIdentityNumber(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Identity;
