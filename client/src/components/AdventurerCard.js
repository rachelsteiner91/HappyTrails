import React from 'react'

function AdventurerCard({adventurer}) {
  return (
    <ul>
      {/*ADD TO API*/}
      <img src = {adventurer.image} alt = {"adventurer"}/>
      <h4> Adventurer Name {adventurer.name}</h4>
      {/*ADD TO API*/}
      <p>Adventurer Bio {adventurer.bio}</p>
      <li> Trails Hiked by this Adventurer {adventurer.hiked_trails}</li>
    </ul>
  )
}

export default AdventurerCard