import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Search from "./Search";

import TrailList from "./TrailList";
import Favorites from "./Favorites";
import Authorization from "./Authorization";
import Safety from "./Safety";





/*
App
|---NavBar
|---Search
|---Safety
|---Favorites
|---Authorization
|       |- AdventurerCard(profile page)
|       |- AddReview
|       |-LoginForm
|       |- HikedTrailList
|               |-HikedTrailCard
|---TrailList
    |-TrailCard

*/


function App() {

  //Adventurer state
  const [adventurers, setAdventurers] = useState([])
  //Trails state
  const [trails, setTrails] = useState([])

  //GET request for trails
  useEffect(() => {getTrails()}, [] )

  function getTrails(){
    fetch('/trails')
    .then(res => res.json())
    .then(data => setTrails(data))
  }
 

//GET Adventurers
useEffect((e) => {
  fetch('/adventurers')
  .then(res => res.json())
  .then(adventurers => setAdventurers(adventurers))
}, [])



 


 
  class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Search />
                <Routes>
                  <Route exact path="/" element={<TrailList/>}>Explore</Route>
                  <Route exact path="/favorites" element={<Favorites />}>Favorites</Route>
                  {/* Does this path name need to be changed? Or are we cool with this?*/}
                  <Route exact path="/profile" element={<Authorization adventurers={adventurers}/>}>Profile or Login/Logout?</Route>
                  <Route exact path="/safety-guidelines" element={<Safety />}>Safety Guidelines</Route>
                </Routes>
            </div>
        );
    }
  }

}

export default App;
