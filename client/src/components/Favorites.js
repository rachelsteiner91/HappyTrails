// Import the React library and the necessary hooks for state and side effects
import React, { useEffect, useState } from 'react';

// Define the Favorites functional component, which takes in a prop for the trail ID
const Favorites = ({ trailId }) => {
    // Hard-code an adventurer ID for now; in a real app, this would come from somewhere like a user's session or authentication context
    const adventurerId = 1;

    // Use the useState hook to initialize a boolean state variable for whether this trail is a favorite for the current adventurer
    const [isFavorite, setIsFavorite] = useState(false);

    // Use the useEffect hook to call the fetchFavoriteStatus function when the component mounts or when the trailId or adventurerId changes
    useEffect(() => {
        fetchFavoriteStatus();
    }, [trailId, adventurerId]);

    // Define an asynchronous function to fetch the current favorite status from the API
    const fetchFavoriteStatus = async () => {
        // Send a GET request to the API to retrieve the adventurer's details
        const response = await fetch(`/api/adventurers/${adventurerId}`);
        // Parse the JSON response from the API
        const data = await response.json();
        // Update the isFavorite state variable based on whether the adventurer's favoriteTrails array includes the current trailId
        setIsFavorite(data.favoriteTrails.includes(trailId));
    };

    // Define an asynchronous function to toggle the favorite status
    const toggleFavorite = async () => {
        // Use a ternary operator to determine the HTTP method based on the current favorite status
        const method = isFavorite ? 'DELETE' : 'PATCH';
        // Send a request to the API to update the favorite status
        const response = await fetch(`/api/adventurers/${adventurerId}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ trailId }),
        });

        // Parse the JSON response from the API
        const data = await response.json();

        // If the API returned a success status, toggle the isFavorite state variable
        if (data.success) {
            setIsFavorite(!isFavorite);
        }
    };

    // Render a button that, when clicked, toggles the favorite status and displays the current favorite status
    return (
        <button onClick={toggleFavorite}>{isFavorite ? 'Unfavorite' : 'Favorite'}</button>
    );
};

// Export the Favorites component as the default export from this module
export default Favorites;

