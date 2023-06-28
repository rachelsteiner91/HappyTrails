import React from 'react'
import TrailCard from './TrailCard'

function TrailList({trails}) {
  const trailCards = trails.map((trail) => (
    <TrailCard
    key={trail.id}
    trail={trail}/>)); 
  return (
    <div className="TrailsList">Hiking Trails
      {trailCards}
    </div>
  )
}

export default TrailList