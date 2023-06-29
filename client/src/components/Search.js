import React from 'react'

//rachel to cross check this with canvas
function Search({setSearch, search}) {
    function handleChange(e) {
        setSearch(e.target.value)
    }
  return (
    <div className="ui search"> 
        <div className="ui icon input">
        <label htmlFor="Search"> Find a Hike:</label>
        <input
            value={search}
            type="text"
            id="search"
            placeholder="Search by city, or by park..."
            onChange={(e) => handleChange(e)}
        />
        <button><svg width="24" height="24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M16.473 17.887A9.46 9.46 0 0 1 10.5 20a9.5 9.5 0 1 1 9.5-9.5 9.46 9.46 0 0 1-2.113 5.973l5.32 5.32a1 1 0 0 1-1.414 1.414l-5.32-5.32ZM18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" fill="#2B381F"></path></svg></button>
</div>
    </div>
  )
}

export default Search