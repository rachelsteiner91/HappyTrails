import React from 'react'

function TrailCard({trail}) {

const { id, name, altitude, difficulty } = trail;
 
  return (
    <ul className="trailcard" id={id}>
      <h1>NAME:{name}</h1>
      <h1>ALTITUDE:{altitude}</h1>
      <h1>DIFFICULTY:{difficulty}</h1> 
     {/* <h1>REVIEWS:{[trail_reviews]}</h1> <---reviews need to be mapped */}
      </ul>
  )
}

export default TrailCard