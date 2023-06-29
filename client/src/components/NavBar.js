import React from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom"


function NavBar({adventurer}) {
  return (
    <header>Navigation
      <h1>
        <span className="logo" role="img">
        </span>
      </h1>
      <nav>
        <NavLink exact to = "/home"> Home </NavLink>
        <NavLink exact to = "/safety"> Safety </NavLink>
        <NavLink exact to = "/trail_reviews"> New Review </NavLink>
        <NavLink exact to = "/adventurers"> Adventure Profile </NavLink>
        <NavLink exact to = "/trails"> Trails </NavLink>
        <NavLink exact to = "/hiked_trails"> Your Hiked Trails </NavLink>
        <NavLink exact to = "/auth"> Log In </NavLink>
        {/* { user ? 
					(<ul>
						<button onClick={handleLogout}>
							Log Out
						</button>
						<p>Take a Hike, {adventurer.username}!</p>
					</ul>) : 
					''
				} */}
      </nav>
    </header>
  );
}

export default NavBar