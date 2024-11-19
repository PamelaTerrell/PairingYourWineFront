import React, { useState, useEffect } from 'react';
import './AddWinePairing.css'; // Import the CSS file
import Footer from './Footer';

const AddWinePairing = () => {
  const [wine, setWine] = useState('');
  const [dish, setDish] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [pairings, setPairings] = useState([]); // State to store the list of pairings

  // Fetch pairings from the backend when the component mounts
  useEffect(() => {
    const fetchPairings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pairings');
        if (!response.ok) {
          throw new Error('Failed to fetch pairings');
        }
        const data = await response.json();
        setPairings(data); // Store the fetched pairings in state
      } catch (err) {
        setError('Failed to load pairings');
      }
    };

    fetchPairings();
  }, []); // Run this once when the component mounts

  // Handle form submission to add a new pairing
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPairing = { wine, dish };

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
      setPairings((prevPairings) => [...prevPairings, data]); // Update the list of pairings
    } catch (err) {
      setError('There was an issue adding your wine pairing. Please try again.');
      setMessage('');
    }
  };

  // Handle the deletion of a pairing
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pairings/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete pairing');
      }

      setPairings(pairings.filter((pairing) => pairing._id !== id)); // Remove from list
    } catch (err) {
      setError('There was an issue deleting the pairing. Please try again.');
    }
  };

  // Handle the editing of a pairing (this could be expanded as needed)
  const handleEdit = (id, wine, dish) => {
    setWine(wine);
    setDish(dish);
    // You can add a logic to update the pairing, if needed
  };

  return (
    <div className="add-wine-pairing">
      <h1>Add a New Vino Pairing</h1>

      <p className="info-text">
        Have you discovered a fabulous vino pairing that you think we should know about? 
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

      {/* List of Pairings */}
      <div className="pairings-list">
        <h2>Existing Wine Pairings</h2>
        {pairings.length > 0 ? (
          <ul>
            {pairings.map((pairing) => (
              <li key={pairing._id} className="pairing-item">
                <span>{pairing.dish} - {pairing.wine}</span>
                <div className="button-container">
                  <button className="edit-btn" onClick={() => handleEdit(pairing._id, pairing.wine, pairing.dish)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(pairing._id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No pairings available yet.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AddWinePairing;
