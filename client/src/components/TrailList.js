import React from 'react'
import TrailCard from './TrailCard'

function TrailList({ trails }) {
  return (
    <div>Hiking Trails
      {trails && trails.length > 0 ? trails.map((trail) => (
        <TrailCard key={trail.id} trail={trail} />
      )) : <p>Loading trails...</p>}
    </div>
  )
}

export default TrailList;
