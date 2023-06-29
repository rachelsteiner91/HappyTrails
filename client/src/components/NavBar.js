import React from 'react'
import { NavLink } from "react-router-dom"
import { AppBar, Avatar, Tooltip, Button, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

// import { Link, useNavigate, NavLink } from "react-router-dom"

const pages = ['Explore', 'Safety', 'Shop'];
const settings = ['Profile', 'Logout'];

function NavBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
        <nav>
          <NavLink exact to = "/home"> Home </NavLink>
          <NavLink exact to = "/safety"> Safety </NavLink>
          <NavLink exact to = "/trail_reviews"> New Review </NavLink>
          <NavLink exact to = "/adventurers"> Adventure Profile </NavLink>
          <NavLink exact to = "/trails"> Trails </NavLink>
          <NavLink exact to = "/hiked_trails"> Your Hiked Trails </NavLink>
          <NavLink exact to = "/auth"> Log In </NavLink>
        </nav>
    </div>





    // <div>
    //   <AppBar position="static">
    //     <Container maxWidth="xl">
    //       <nav>
    //         <Toolbar disableGutters>
    //           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    //           <Typography
    //             variant="h6"
    //             noWrap
    //             component="a"
    //             href="/"
    //             sx={{
    //               mr: 2,
    //               display: { xs: 'none', md: 'flex' },
    //               fontFamily: 'monospace',
    //               fontWeight: 700,
    //               letterSpacing: '.3rem',
    //               color: 'inherit',
    //               textDecoration: 'none',
    //             }}
    //           >
    //             HappyTrails
    //           </Typography>

    //           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //             <IconButton
    //               size="large"
    //               aria-label="account of current user"
    //               aria-controls="menu-appbar"
    //               aria-haspopup="true"
    //               onClick={handleOpenNavMenu}
    //               color="inherit"
    //             >
    //               <MenuIcon />
    //             </IconButton>
    //             <Menu
    //               id="menu-appbar"
    //               anchorEl={anchorElNav}
    //               anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'left',
    //               }}
    //               keepMounted
    //               transformOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'left',
    //               }}
    //               open={Boolean(anchorElNav)}
    //               onClose={handleCloseNavMenu}
    //               sx={{
    //                 display: { xs: 'block', md: 'none' },
    //               }}
    //             >

                
    //             </Menu>


    //           </Box>
    //           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    //           <Typography
    //             variant="h5"
    //             noWrap
    //             component="a"
    //             href=""
    //             sx={{
    //               mr: 2,
    //               display: { xs: 'flex', md: 'none' },
    //               flexGrow: 1,
    //               fontFamily: 'monospace',
    //               fontWeight: 700,
    //               letterSpacing: '.3rem',
    //               color: 'inherit',
    //               textDecoration: 'none',
    //             }}
    //           >
    //             HappyTrails
    //           </Typography>
    //           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                

    //               <Button
    //                 key="Your Hikes"
    //                 onClick={handleCloseNavMenu}
    //                 sx={{ my: 2, color: 'white', display: 'block' }}
    //               >
    //                 Your Hikes
    //               </Button>

              
    //           </Box>

    //           <Box sx={{ flexGrow: 0 }}>
    //             <Tooltip title="Open settings">
    //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //                 <Avatar alt="Remy Sharp" src="https://placedog.net/50" />
    //               </IconButton>
    //             </Tooltip>
    //             <Menu
    //               sx={{ mt: '45px' }}
    //               id="menu-appbar"
    //               anchorEl={anchorElUser}
    //               anchorOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //               }}
    //               keepMounted
    //               transformOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //               }}
    //               open={Boolean(anchorElUser)}
    //               onClose={handleCloseUserMenu}
    //             >
    //               {settings.map((setting) => (
    //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //                   <Typography textAlign="center">{setting}</Typography>
    //                 </MenuItem>
    //               ))}
    //             </Menu>
    //           </Box>

    //         </Toolbar>
    //       </nav>
    //     </Container>
    //   </AppBar>
      
    //   <NavLink
    //   exact
    //   path="/hiked_trails"
    //   render={() => (
    //       <MenuItem key="Your Hikes" onClick={handleCloseNavMenu}>
    //         <Typography textAlign="center">Your Hikes</Typography>
    //       </MenuItem>
    //   )}
    // />
      
    // </div>
  );
}
export default NavBar