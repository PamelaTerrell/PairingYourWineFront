import React, { useState, useEffect } from 'react';
import './AddWinePairing.css'; // Import the CSS file

const AddWinePairing = () => {
  const [wine, setWine] = useState('');
  const [dish, setDish] = useState('');
  const [pairings, setPairings] = useState([]);
  const [editingId, setEditingId] = useState(null); // Track if we are editing a pairing
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch the current pairings when the component mounts
  useEffect(() => {
    const fetchPairings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pairings');
        const data = await response.json();
        setPairings(data);
      } catch (err) {
        console.error('Error fetching pairings:', err);
      }
    };

    fetchPairings();
  }, []);

  // Handle form submission to create or update a pairing
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPairing = { wine, dish };

    try {
      if (editingId) {
        // If we are editing an existing pairing, update it
        const response = await fetch(`http://localhost:5000/api/pairings/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPairing),
        });

        if (!response.ok) {
          throw new Error('Failed to update pairing');
        }

        const updatedPairing = await response.json();

        // Update the list of pairings with the updated pairing
        setPairings(pairings.map((pairing) => (pairing._id === editingId ? updatedPairing : pairing)));
        setMessage('Wine pairing updated successfully!');
      } else {
        // If we're adding a new pairing
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

        const addedPairing = await response.json();

        // Add the new pairing to the list of pairings
        setPairings([...pairings, addedPairing]);
        setMessage('Wine pairing added successfully!');
      }

      // Reset the form fields and clear the editing ID
      setWine('');
      setDish('');
      setEditingId(null);
      setError('');
    } catch (err) {
      setError('There was an issue with your request. Please try again.');
      setMessage('');
    }
  };

  // Handle deleting a pairing
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pairings/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete pairing');
      }

      // Remove the deleted pairing from the state
      setPairings(pairings.filter((pairing) => pairing._id !== id));
      setMessage('Wine pairing deleted successfully!');
    } catch (err) {
      setError('There was an issue deleting the pairing. Please try again.');
    }
  };

  // Handle editing a pairing
  const handleEdit = (pairing) => {
    setWine(pairing.wine);
    setDish(pairing.dish);
    setEditingId(pairing._id);
    setMessage('');
    setError('');
  };

  return (
    <div className="add-wine-pairing">
      <h1>{editingId ? 'Edit Wine Pairing' : 'Add a New Wine Pairing'}</h1>

      <p className="info-text">
        {editingId
          ? 'Edit the wine pairing information below.'
          : 'Have you discovered a fabulous wine pairing that you think we should know about? Tell us about it here and we can add it to our database!'}
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
          {editingId ? 'Update Pairing' : 'Add Pairing'}
        </button>
      </form>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      <h2>Current Wine Pairings</h2>
      <ul className="pairings-list">
        {pairings.map((pairing) => (
          <li key={pairing._id} className="pairing-item">
            <span>
              <strong>{pairing.dish}</strong> - {pairing.wine}
            </span>
            <button onClick={() => handleEdit(pairing)} className="edit-btn">Edit</button>
            <button onClick={() => handleDelete(pairing._id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddWinePairing;
