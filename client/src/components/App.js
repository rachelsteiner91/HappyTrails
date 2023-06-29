import React, { useState, useEffect } from 'react'
import './App.css';
import NavBar from "./NavBar";
import TrailList from "./TrailList";
import Search from "./Search"
import {Routes, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { search } from '@material-ui/icons';

import Favorites from "./Favorites";
import Auth from "./Auth";
import Safety from "./Safety";
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
        <Routes>
          <Route path="/trails" element={<TrailList trails={trails}/>} />
          <Route path="/adventurers" element={<AdventurerContainer adventurers={adventurers}/>} />
          {/* <Route path="/favorites" element={Favorites} />
          <Route path="/profile" render={(props) => <Auth {...props} adventurers={adventurers} />} />
          <Route path="/safety-guidelines" component={Safety} /> */}
        </Routes>




export default App;