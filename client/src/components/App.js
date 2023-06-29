import React, { useState, useEffect } from 'react'
import './App.css';
import NavBar from "./NavBar";
import TrailList from "./TrailList";
import {Routes, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material';

function App() {
  const [adventurers, setAdventurers] = useState([]);
  const [trails, setTrails] = useState([]); // Initialize to empty array

  useEffect(() => {
    getTrails();
    getAdventurers();
  }, []);

  function getTrails() {
    fetch('/trails')
      .then(res => res.json())
      .then(data => setTrails(data))
      .catch((error) => console.error('Error:', error));
  }

  function getAdventurers() {
    fetch('/adventurers')
      .then(res => res.json())
      .then(data => setAdventurers(data))
      .catch((error) => console.error('Error:', error));
  }

  return (
    <div>
        <NavBar />
        <Box>
          <TrailList trails={trails} />
        </Box>
        <Routes>
          {/* <Route exact path="/authorization" element={<Authorization/>} /> */}
        </Routes>
    </div>
  );
}

export default App;