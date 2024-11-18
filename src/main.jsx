import React from 'react';
import ReactDOM from 'react-dom/client';  // Use the new root API
import App from './App';  // Import the main App component
import './index.css';  // Global CSS styles (optional)

const root = ReactDOM.createRoot(document.getElementById('root'));  // Get the root element
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component here */}
  </React.StrictMode>
);
