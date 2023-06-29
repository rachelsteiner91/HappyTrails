import React, { useState, useEffect } from 'react'
import './App.css';
import NavBar from "./NavBar";
import TrailList from "./TrailList";
import Search from "./Search"
// import Safety from "./Safety"
import Auth from "./Auth"
import AddReview from "./AddReview"
import HikedTrailsList from "./HikedTrailsList"
import {Routes, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { search } from '@material-ui/icons';
import AdventurerContainer from "./AdventurerContainer";

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
          <Search />
        </Box>
        <Box>
          </Box>
        <TrailList trails={trails}/>
        <Routes>
          <Route path="/home" element={<TrailList trails={trails}/>} />
          {/* <Route path="/safety" element={<Safety />} /> */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/trail_reviews" element={<AddReview />} />
          <Route path="/adventurers" element={<AdventurerContainer adventurers={adventurers}/>} />
          <Route path="/trails" element={<TrailList trails={trails}/>} />
          <Route path="/hiked_trails" element={<HikedTrailsList />} />
        </Routes>
    </div>
  )}

export default App;