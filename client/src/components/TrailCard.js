import React from 'react'

function TrailCard({ trail, onAddFavorite, onRemoveFavorite, favorites }) {
    const { id, name, altitude, difficulty } = trail;

    const isFavorite = favorites.includes(id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            onRemoveFavorite(id);
        } else {
            onAddFavorite(id);
        }
    };

    return (
        <ul className="trailcard" id={id}>
            <h1>NAME:{name}</h1>
            <h1>ALTITUDE:{altitude}</h1>
            <h1>DIFFICULTY:{difficulty}</h1>
            <button onClick={handleFavoriteClick}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
        </ul>
    )
}

export default TrailCard;


