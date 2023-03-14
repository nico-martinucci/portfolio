import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Matter, { MouseConstraint } from "matter-js";
import { motion, AnimatePresence } from "framer-motion"
import animationSettings from "./pageAnimations";

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// create an engine
var engine = Engine.create();
var matterCanvas = document.getElementById("matterCanvas");
// var canvasMouse = Mouse.create(matterCanvas);
// canvasMouse.pixelRatio = 2;
let mConstraint = MouseConstraint.create(engine);

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    canvas: matterCanvas,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent' // remove once it's drawing in correct location
    }
});

console.log(engine.world);

Composite.add(engine.world, mConstraint);

// create a ground
// x (center), y (center), w, h
const ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + 10,
    window.innerWidth,
    20,
    {
        isStatic: true
    }
);

// create a left wall
// x (center), y (center), w, h
const leftWall = Bodies.rectangle(
    -5,
    window.innerHeight / 2,
    10,
    window.innerHeight,
    {
        isStatic: true
    }
);

// create a right wall
// x (center), y (center), w, h
const rightWall = Bodies.rectangle(
    window.innerWidth + 5,
    window.innerHeight / 2,
    10,
    window.innerHeight,
    {
        isStatic: true
    }
);

// add all of the bodies to the world
Composite.add(engine.world, [ground, leftWall, rightWall]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

console.log(render.canvas);

/**
 * Home: 
 */
function Home() {

    const bio = `
        I'm a full-stack web developer and former transportation planner. I'm
        passionate about creative problem solving, data-driven decision making,
        and finding creative solutions to improve peoples' lives.
    `

    function addBody() {
        let x = (Math.random() * (window.innerWidth - 80)) + 40;
        let y = Math.random() * 200;
        let r = (Math.random() * 60) + 20;
        const newBody = Bodies.circle(x, y, r, r);
        console.log("new body");
        Composite.add(engine.world, [newBody]);
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={animationSettings.initial}
                animate={animationSettings.animate}
                exit={animationSettings.exit}
            >
                <Stack direction="row">
                    <img width="300px" src="/nico_headshot_circle.png" onClick={addBody} />
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
                                    to="/skills"
                                    variant="outlined"
                                >
                                    Skills
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
            </motion.div>
        </AnimatePresence>
    )
}


export default Home;