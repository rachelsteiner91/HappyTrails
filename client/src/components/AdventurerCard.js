import React from 'react'
import { Link } from "react-router-dom"

function AdventurerCard({adventurer}) {
  return (
    <ul>
      <img src = {adventurer.image} alt = {"adventurer"}/>
      <h4> Adventurer Name {adventurer.name}</h4>
      <p>Adventurer Bio {adventurer.bio}</p>
      <li> Trails Hiked by this Adventurer {adventurer.hiked_trails}</li>
        <Link to={`/adventurers/${adventurer.id}`}>
					<h2>{adventurer.name}</h2>
				</Link>
    </ul>
  )
}

export default AdventurerCard