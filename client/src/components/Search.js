import React from 'react'

//rachel to cross check this with canvas
function Search({setSearch, search}) {
    function handleChange(e) {
        setSearch(e.target.value)
    }
  return (
    <div> className="Search"
        <label htmlFor="Search"> Search Hikes:</label>
        <input
            value={search}
            type="text"
            id="search"
            placeholder="Type to search for hikes..."
            onChange={(e) => handleChange(e)}
        />

    </div>
  )
}

export default Search