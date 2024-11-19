import React, { useState } from 'react';
import './AddWinePairing.css'; // Import the CSS file

const AddWinePairing = () => {
  const [wine, setWine] = useState('');
  const [dish, setDish] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle form submission to add a new pairing
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPairing = { wine, dish };

    // Send POST request to the backend to create a new pairing
    try {
      const response = await fetch('http://localhost:5000/api/pairings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPairing),
      });

      if (!response.ok) {
        throw new Error('Failed to add pairing');
      }

      const data = await response.json();
      setWine('');
      setDish('');
      setMessage('Your wine pairing has been added successfully!');
      setError('');
    } catch (err) {
      setError('There was an issue adding your wine pairing. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="add-wine-pairing">
      <h1>Add a New Wine Pairing</h1>

      <p className="info-text">
        Have you discovered a fabulous wine pairing that you think we should know about? 
        Tell us about it here and we can add it to our database!
      </p>

      <form onSubmit={handleSubmit} className="wine-form">
        <input
          type="text"
          placeholder="Wine"
          value={wine}
          onChange={(e) => setWine(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Dish"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Add Pairing
        </button>
      </form>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddWinePairing;
