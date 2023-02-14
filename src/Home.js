import { Stack, Typography, Button, ButtonGroup } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FadeInOut from "./fadeInOut";

/**
 * Home: 
 */
function Home() {

    const bio = `
        I'm a full-stack web developer and former transportation planner. I'm
        passionate about creative problem solving, data-driven decision making,
        and finding creative solutions to improve peoples' lives.
    `

    return (
        <>
            <Stack direction="row">
                <img width="300px" src="/nico_headshot_circle.png" />
                <Stack ml={6}>
                    <Stack gap={3}>
                        <Typography variant="h3" gutterBottom>
                            Hi, I'm Nico!
                        </Typography>
                        <Typography variant="h6">{bio}</Typography>
                        <Stack direction="row" gap={4}>
                            <Button
                                component={Link}
                                to="/projects"
                                variant="outlined"
                            >
                                Projects
                            </Button>
                            <Button
                                component={Link}
                                to="/resume"
                                variant="outlined"
                            >
                                Resume
                            </Button>
                            <Button
                                component={Link}
                                to="/contact"
                                variant="outlined"
                            >
                                Contact
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}


export default Home;