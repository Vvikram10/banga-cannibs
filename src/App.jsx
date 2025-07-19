import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Loading from './components/home/Loading';
import Home from './components/home/home';
import LocationPage from './pages/seo/LocationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:location" element={<LocationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
