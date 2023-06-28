import React from 'react'
import Favorites from './Favorites'

function TrailCard({ trail }) {
    const { id, name, altitude, difficulty } = trail;
    
    return (
        <ul className="trailcard" id={id}>
            <h1>NAME:{name}</h1>
            <h1>ALTITUDE:{altitude}</h1>
            <h1>DIFFICULTY:{difficulty}</h1>
            <Favorites trailId={id} />
        </ul>
    )
}

export default TrailCard;

