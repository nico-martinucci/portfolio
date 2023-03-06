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
    const iconPxWidth = 30;

    return (
        <Box mb={5} sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar display="flex">
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
                            <NavLink style={linkStyle} to="/skills">Skills</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink style={linkStyle} to="/resume">Resume</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink style={linkStyle} to="/contact">Contact</NavLink>
                        </Typography>
                    </Stack>
                    <Box sx={{ flexGrow: 1 }} />
                    <Stack direction={"row"} gap={3}>
                        <a href="https://github.com/nico-martinucci" target="_blank">
                            <img width={`${iconPxWidth}px`} src="/github.png" />
                        </a>
                        <a href="https://www.linkedin.com/in/nico-martinucci/" target="_blank">
                            <img width={`${iconPxWidth}px`} src="/linked_in.png" />
                        </a>
                        <a href="https://twitter.com/NicoM137" target="_blank">
                            <img width={`${iconPxWidth}px`} src="/twitter.png" />
                        </a>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Nav;