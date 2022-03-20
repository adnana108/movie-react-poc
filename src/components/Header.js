import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import theme from "../assets/theme"
import { ThemeProvider } from '@mui/material';
import { Button } from "@mui/material"
import {useNavigate} from "react-router-dom"




export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const navigate = useNavigate();


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
            <Toolbar
            sx={{ display:"block", paddingTop:"10px", backgroundColor:"#DD4A48"}}>
                <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                    <Box sx={{display:"inline-flex"}}>
                    <img 
                    
                    onClick={() => navigate('')}
                    width="50px"
                    alt="MovieApp" 
                    src="http://simpleicon.com/wp-content/uploads/movie-3.svg" />
                </Box>
                    <Box sx={{ display:"flex", alignSelf:"center"}} >
                        <Button
                        variant="outlined" 
                        color="primary" 
                         >Latest Movies</Button>
                        <Button
                        sx={{marginLeft:"20px"}}
                        onClick={() => navigate('watchlist')}
                        variant="outlined" 
                        color="primary" 
                        >
                          Watchlist
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
         {renderMobileMenu}
         {renderMenu}
        </Box>
    </ThemeProvider>
  );
}
