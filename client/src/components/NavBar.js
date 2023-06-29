import React from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom"


function NavBar({adventurer, updateAdventurer}) {
  const navigate = useNavigate();

  function handleLogOut () {
      fetch('/logout')
      .then((response) => {
            if (response.ok) {
            updateAdventurer(null);
            navigate('/App');
        }
  });
}
  return (
    <header>Navigation
      <h1>
        <span className="logo" role="img">
        </span>
      </h1>
      <nav>
        <NavLink exact to = "/trails"> Trails </NavLink>
        <NavLink exact to = "/adventurers"> Profile </NavLink>
        <NavLink className="button"exact to="/loginform"> Log In 
        </NavLink>
            { adventurer ?
                     (<>
                     <button onClick={handleLogOut} className="button" >
                      Log Out
                     </button>
                     </>) : 
                     ''
}
      </nav>
    </header>
  );
}

export default NavBar