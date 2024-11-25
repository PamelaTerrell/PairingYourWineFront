import React, { useState } from 'react';
import './Home.css'; // Import the updated CSS for styling
import Footer from './Footer';

const Home = () => {
  // State to store the selected dish and wine pairing result
  const [dish, setDish] = useState('');
  const [wine, setWine] = useState('');
  const [error, setError] = useState('');

  // Wine pairing data (lowercase keys)
  const pairings = {
    chicken: 'Chardonnay',
    beef: 'Cabernet Sauvignon',
    pork: 'Pinot Noir',
    cheese: 'Sauvignon Blanc',
    pasta: 'Pinot Grigio',
    seafood: 'Albariño',
    lamb: 'Syrah',
    duck: 'Merlot',
    turkey: 'Zinfandel',
    veal: 'Chablis',
    spicy_food: 'Riesling',
    grilled_vegetables: 'Tempranillo',
    sushi: 'Champagne',
    mushroom_dishes: 'Chianti',
    pizza: 'Sangiovese',
    chocolate: 'Port',
    grilled_steak: 'Malbec',
    barbecue: 'Shiraz',
    roasted_vegetables: 'Grenache',
    foie_gras: 'Sauternes',
    oysters: 'Muscadet',
    crab: 'Chablis',
    shrimp: 'Vermentino',
    risotto: 'Gavi',
    smoked_salmon: 'Pinot Gris',
    ceviche: 'Torrontés',
    falafel: 'Garnacha',
    tempura: 'Champagne',
    charcuterie: 'Beaujolais',
    eggplant_dishes: 'Zinfandel',
    quiche: 'Chardonnay',
    apple_pie: 'Riesling',
    berry_desserts: 'Lambrusco',
    cream_based_desserts: 'Late Harvest Riesling',
    baked_goods: 'Pinot Noir',
  };
  

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the user input to lowercase for case-insensitive matching
    const lowercaseDish = dish.toLowerCase();

    // Check if the lowercase dish entered by the user matches any of the pairings
    if (pairings[lowercaseDish]) {
      setWine(pairings[lowercaseDish]); // Set the corresponding wine pairing
      setError(''); // Clear any previous error
    } else {
      setWine(''); // Clear the wine pairing if no match
      setError('Please enter a valid dish (Chicken, Beef, Pork, Pasta, Cheese, or Seafood)');
    }
  };

  return (
    <div className="home-container">
      <h1 className="heading">
        Welcome to <span className="site-name">VinoPairings.com</span>
      </h1>
      <p className="description">
        Discover the perfect wine pairing for your favorite dishes.
      </p>

      <form onSubmit={handleSubmit} className="pairing-form">
        <input
          type="text"
          placeholder="Enter dish (Chicken, Beef, Pork, etc.)"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Get Vino Pairing
        </button>
      </form>

      {wine && (
        <div className="pairing-result">
          <h3>Wine Pairing for {dish}:</h3>
          <p>{wine}</p>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      <div className="image-container">
        <img src="wineglass.jpeg" alt="Wine glass" className="wine-image" />
        <p className="photo-credit">
          Photo by{' '}
          <a
            href="https://unsplash.com/@apolophotographer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apolo Photographer
          </a>{' '}
          on{' '}
          <a
            href="https://unsplash.com/photos/clear-glass-bottle-with-red-liquid-bWAHfy-lQVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
