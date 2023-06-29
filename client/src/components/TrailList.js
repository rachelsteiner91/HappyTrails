import React from 'react';
import TrailCard from './TrailCard';

function TrailList({ trails }) {
    // Filter only those trails which have an id
    const validTrails = trails.filter(trail => trail.id != null);
    // Ensure every trail object in the trails array has an id property
    const trailCards = validTrails.map(trail => (
        <TrailCard
            key={trail.id}
            trail={trail}
        />
    ));

    return (
        <div className="TrailsList">Hiking Trails
            {trailCards}
        </div>
    )
}

export default TrailList;
