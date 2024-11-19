import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddWinePairing from './pages/AddWinePairing';
import About from './pages/About'; 
import WineHistory from './pages/WineHistory';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddWinePairing />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<WineHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
