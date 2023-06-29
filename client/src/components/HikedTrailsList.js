import React, { useState, useEffect } from 'react';

const HikedTrailsList = ({ adventurerUsername }) => {
  const [hikedTrails, setHikedTrails] = useState([]);
  const [trailName, setTrailName] = useState("");

  // Function to fetch the hiked trails for the given adventurer
  const fetchHikedTrails = async () => {
    const response = await fetch(`/hiked_trails?adventurer_username=${adventurerUsername}`);
    const data = await response.json();

    if (response.ok) {
      setHikedTrails(data);
    } else {
      console.error("Error fetching hiked trails: ", data.error);
    }
  };

  // Function to handle form submission and add a new hiked trail
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/hiked_trails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        adventurer_username: adventurerUsername,
        trail_name: trailName
      })
    });

    const data = await response.json();

    if (response.ok) {
      setHikedTrails([...hikedTrails, data]);
      setTrailName("");
    } else {
      console.error("Error adding hiked trail: ", data.error);
    }
  };

  // Load the hiked trails when the component mounts
  useEffect(() => {
    fetchHikedTrails();
  }, []);

  return (
    <div>
      <h1>Hiked Trails</h1>

      {/* List of hiked trails */}
      {hikedTrails.map(trail => (
        <div key={trail.id}>
          <h2>{trail.name}</h2>
          {/* Other trail details*/}
        </div>
      ))}

      {/* Form to add a new hiked trail */}
      <form onSubmit={handleSubmit}>
        <label>
          <h1>Trail name:</h1>
          <input type="text" value={trailName} onChange={e => setTrailName(e.target.value)} required />
        </label>
        <button type="submit">Mark Trail as Hiked</button>
      </form>
    </div>
  );
};

export default HikedTrailsList;
