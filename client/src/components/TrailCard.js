import React from 'react'

import Favorites from './Favorites'
import { Link } from "react-router-dom"

function TrailCard({ trail }) {
    const { id, name, altitude, difficulty, image } = trail;
    
    return (
        <ul className="trailcard" id={id}>
            <li>
           <img src = {image} alt = {"trail"}/>
            <h2> {name}</h2>
            <h3>{altitude}</h3>
            <h3>{difficulty}</h3>
            
            <Favorites trailId={id} />
            <Link to={`/trails/${id}`}>
            <h2>{name}</h2>
            </Link>
            </li>
        </ul>
    )
}

export default TrailCard;


