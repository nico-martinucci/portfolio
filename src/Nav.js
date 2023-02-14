import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/system';

/**
 * Nav: 
 */
function Nav() {

    const linkStyle = { textDecoration: "none", color: "inherit" };

    return (
        <Box mb={5} sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack direction="row" spacing={3}>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink style={linkStyle} to="/">Home</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink style={linkStyle} to="/projects">Projects</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink style={linkStyle} to="/resume">Resume</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink style={linkStyle} to="/contact">Contact</NavLink>
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Nav;