import React, { useState } from 'react';
import './AddWinePairing.css';

const AddWinePairing = () => {
  const [wine, setWine] = useState('');
  const [dish, setDish] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPairing = { wine, dish };
    console.log(newPairing)
    try {
      const response = await fetch('http://localhost:5000/api/pairings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPairing),
      });

      if (!response.ok) {
        throw new Error('Failed to add pairing');
      }

      const data = await response.json();
      console.log('Pairing added:', data);
      setWine('');
      setDish('');
    } catch (err) {
      console.error('Error adding pairing:', err);
    }
  };

  return (
    <div>
      <h1>Add a New Wine Pairing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Wine"
          value={wine}
          onChange={(e) => setWine(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dish"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
        />
        <button type="submit">Add Pairing</button>
      </form>
    </div>
  );
};

export default AddWinePairing;
