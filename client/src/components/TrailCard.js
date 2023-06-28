import React from 'react'
import Favorites from './Favorites'
import { Link } from "react-router-dom"

function TrailCard({ trail }) {
    const { id, name, altitude, difficulty } = trail;
    
    return (
        <ul className="trailcard" id={id}>
            <h1>NAME:{name}</h1>
            <h1>ALTITUDE:{altitude}</h1>
            <h1>DIFFICULTY:{difficulty}</h1>
            <Favorites trailId={id} />
            <Link to={`/trails/${id}`}>
            <h2>{name}</h2>
            </Link>
        </ul>
    )

}

export default TrailCard;

