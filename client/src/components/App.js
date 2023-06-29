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
  const [search, setSearch] = useState('')

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

  const handleSearch = (newStr) => {
    setSearch(newStr)
  }

 const filteredTrails = [...trails].filter(trail =>
    trail.name.toLowerCase().includes(search.toLowerCase()))

  
  return (
    <div>
        <NavBar />
        <Box>
          <Search search={search} handleSearch={handleSearch}/>
        </Box>
        <Box>
  
        <TrailList trails={filteredTrails}/>
        <Routes>
          <Route path="/home" element={<TrailList trails={filteredTrails}/>}/>
          {/* <Route path="/safety" element={<Safety />} /> */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/trail_reviews" element={<AddReview />} />
          <Route path="/adventurers" element={<AdventurerContainer adventurers={adventurers}/>} />
          {/* <Route path="/trails" element={<TrailList trails={trails}/>} /> */}
          <Route path="/hiked_trails" element={<HikedTrailsList />} />
        </Routes>
        </Box>
    </div>
  )}

export default App;