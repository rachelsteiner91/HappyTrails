import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Safety from "./Safety";
import Authorization from "./Authorization";
import AddReview from "./AddReview";
import AdventurerContainer from "./AdventurerContainer";
import TrailList from "./TrailList";
import HikedTrailsList from "./HikedTrailsList";

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


  //GET HIKED_TRAILS TABLE
  //PASS DOWN PROPS 

  return (
    <div>
        <NavBar />
        <Routes>
          <Route path="/safety" element={<Safety />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/trail_reviews" element={<AddReview />} />
          <Route path="/adventurers" element={<AdventurerContainer adventurers={adventurers}/>} />
          <Route path="/trails" element={<TrailList trails={trails}/>} />
          <Route path="/hiked_trails" element={<HikedTrailsList />} />
        </Routes>
      </div>
  )
}


export default App;












