import React from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom"


function NavBar() {
  return (
    <header>Navigation
      <h1>
        <span className="logo" role="img">
        </span>
      </h1>
      <nav>
        <NavLink exact to = "/trails"> Trails </NavLink>
        <NavLink exact to = "/adventurers"> Profile </NavLink>
      </nav>
    </header>
  );
}

export default NavBar