import { Typography } from "@mui/material";
import IndividualProject from "./IndividualProject";
import Grid2 from '@mui/material/Unstable_Grid2'
import projectList from "./projectList";

/**
 * Projects: 
 */
function Projects() {

    return (
        <>
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
        </>
    )
}


export default Projects;