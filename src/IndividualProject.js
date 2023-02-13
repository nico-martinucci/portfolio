import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

/**
 * IndividualProject: 
 */
function IndividualProject({ project }) {

    return (
        <Grid2 xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }} >
                <CardActionArea href={project.deployLink} target="_blank">
                    <CardMedia
                        sx={{ height: 200 }}
                        image={project.image}
                        title={project.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {project.name}
                        </Typography>
                        <Typography gutterBottom variant="body1" color="text.secondary">
                            {project.description}
                        </Typography>
                        <Typography gutterBottom variant="caption" color="text.secondary">
                            Tech: {project.tech.join(", ")}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {project.gitHubLinks.map(l => (
                            <Button size="small" href={l.link} target="_blank">{l.title}</Button>
                        ))}
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid2>
    )
}


export default IndividualProject;