import React, { useState } from 'react';

const Home = () => {
  // State to store the selected dish and wine pairing result
  const [dish, setDish] = useState('');
  const [wine, setWine] = useState('');
  const [error, setError] = useState('');

  // Wine pairing data
  const pairings = {
    Chicken: 'Chardonnay',
    Beef: 'Cabernet Sauvignon',
    Pork: 'Pinot Noir',
    Cheese: 'Sauvignon Blanc',
    Pasta: 'Pinot Grigio',
    Seafood: 'Albariño',
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the dish entered by the user matches any of the pairings
    if (pairings[dish]) {
      setWine(pairings[dish]); // Set the corresponding wine pairing
      setError(''); // Clear any previous error
    } else {
      setWine(''); // Clear the wine pairing if no match
      setError('Please enter a valid dish (Chicken, Beef, Pork, Pasta, Cheese, or Seafood)');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to The Wine Pairing App</h1>
      <p>
        Discover the perfect wine pairing for your favorite dishes.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter dish (Chicken, Beef, Pork, etc.)"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '300px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#8b4513', // Brown color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Get Wine Pairing
        </button>
      </form>

      {wine && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <h3>Wine Pairing for {dish}:</h3>
          <p>{wine}</p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '20px', color: 'red', fontSize: '16px' }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Home;
