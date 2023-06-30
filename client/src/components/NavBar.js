import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { AppBar, Avatar, Tooltip, Button, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import LoginForm from './LoginForm';

// import { Link, useNavigate, NavLink } from "react-router-dom"

// const pages = ['Explore', 'Safety', 'Shop'];
// const settings = ['Profile', 'Logout'];

function NavBar({updateAdventurer, adventurer}) {

  const navigate = useNavigate()

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
    <div> Navigation
        <nav>
          <NavLink exact to = "/home"> Home </NavLink>
          <NavLink exact to = "/safety"> Safety </NavLink>
          <NavLink exact to = "/trail_reviews"> New Review </NavLink>
          <NavLink exact to = "/adventurers"> Adventure Profile </NavLink>
          <NavLink exact to = "/trails"> Take a Hike </NavLink>
          <NavLink exact to = "/hiked_trails"> Your Hiked Trails </NavLink>
          <NavLink exact to = "/signup"> Signup </NavLink>
          
          { adventurer ?
                     <button onClick={handleLogOut} className="button" >
                     <NavLink exact to = "/home"> Log Out </NavLink>
                    </button> : 
                     <button className="button" >
                     <NavLink exact to = "/login"> Login </NavLink>
                    </button>
          }
        </nav>

    </div>


  );
}
export default NavBar