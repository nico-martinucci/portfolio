import { Typography } from "@mui/material";
import IndividualProject from "./IndividualProject";
import Grid2 from '@mui/material/Unstable_Grid2'
import projectList from "./projectList";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

/**
 * Projects: 
 */
function Projects() {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <Typography variant="h2" gutterBottom>
                Projects
            </Typography >
            <Typography variant="h6" gutterBottom>
                Click each card for a deployed version of the application
            </Typography >
            <Grid2 container spacing={4}>
                {projectList.map(p => (
                    <IndividualProject key={p.name} project={p} />
                ))}
            </Grid2>
        </motion.div>
    )
}


export default Projects;