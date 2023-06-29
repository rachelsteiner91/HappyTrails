import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Search from "./Search";
import TrailList from "./TrailList";
import Favorites from "./Favorites";
import SignupForm from "./SignupForm";
import Safety from "./Safety";
import AdventurerContainer from "./AdventurerContainer";
import LoginForm from "./LoginForm";
import AddReview from "./AddReview";
function App() {
  const [adventurers, setAdventurers] = useState([]);
  const [trails, setTrails] = useState([]); // Initialize to empty array
  const [adventurer, setAdventurer] = useState(null)
 
  useEffect(() => {
    getTrails();
    getAdventurers();
    getAdventurer();
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

  function getAdventurer() {
    fetch('/authorize_session')
      .then(response => {
      if (response.ok) {
        response.json().then((adventurer) => setAdventurer(adventurer))}
       
      else  {setAdventurer(null)} 
      })
  }

   function updateAdventurer(adventurer) {
        setAdventurer(adventurer)
   } 

  return (
    <div>

      
        <NavBar adventurer={adventurer} updateAdventurer={updateAdventurer}/>
        <Search />
        <SignupForm updateAdventurer={updateAdventurer}/> 
        <AddReview trails={trails}/>
        <Routes>
          <Route path="/trails" element={<TrailList trails={trails}/>} />
          <Route path="/adventurers" element={<AdventurerContainer adventurers={adventurers}/>} />
          {/* <Route path="/favorites" element={Favorites} />
          <Route path="/profile" render={(props) => <Auth {...props} adventurers={adventurers} />} />
          <Route path="/safety-guidelines" component={Safety} /> */}
        </Routes>

      

    </div>
  );
}

export default App;































// import React, { useEffect, useState } from "react";
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import NavBar from "./NavBar";
// import Search from "./Search";

// import TrailList from "./TrailList";
// import Favorites from "./Favorites";
// import Authorization from "./Authorization";
// import Safety from "./Safety";





// /*
// App
// |---NavBar
// |---Search
// |---Safety
// |---Favorites
// |---Authorization
// |       |- AdventurerCard(profile page)
// |       |- AddReview
// |       |-LoginForm
// |       |- HikedTrailList
// |               |-HikedTrailCard
// |---TrailList
//     |-TrailCard

// */


// function App() {

//   //Adventurer state
//   const [adventurers, setAdventurers] = useState([])
//   //Trails state
//   const [trails, setTrails] = useState([])

//   //GET request for trails
//   useEffect(() => {getTrails()}, [] )

//   function getTrails(){
//     fetch('/trails')
//     .then(res => res.json())
//     .then(data => setTrails(data))
//   }
 

// //GET Adventurers
// useEffect((e) => {
//   fetch('/adventurers')
//   .then(res => res.json())
//   .then(adventurers => setAdventurers(adventurers))
// }, [])




 
//   class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <NavBar />
//                 <Search />
//                 <Routes>
//                   <Route exact path="/" element={<TrailList/>}>Explore</Route>
//                   <Route exact path="/favorites" element={<Favorites />}>Favorites</Route>
//                   {/* Does this path name need to be changed? Or are we cool with this?*/}
//                   <Route exact path="/profile" element={<Authorization adventurers={adventurers}/>}>Profile or Login/Logout?</Route>
//                   <Route exact path="/safety-guidelines" element={<Safety />}>Safety Guidelines</Route>
//                 </Routes>
//             </div>
//         );
//     }
//   }

// }

// export default App;
