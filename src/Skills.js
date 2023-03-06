import { Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";
import { motion, AnimatePresence } from "framer-motion"
import animationSettings from "./pageAnimations";
import { ReactComponent as JavaScriptLogo } from "./icons/javascript.svg";
import { ReactComponent as TypeScriptLogo } from "./icons/typescript-icon.svg";
import { ReactComponent as CSSLogo } from "./icons/css-3.svg";
import { ReactComponent as GraphQLLogo } from "./icons/graphql.svg";
import { ReactComponent as HTMLLogo } from "./icons/html-5.svg";
import { ReactComponent as PythonLogo } from "./icons/python.svg";
import { ReactComponent as SQLLogo } from "./icons/sql.svg";
import { ReactComponent as ReactLogo } from "./icons/react.svg";
import { ReactComponent as NodeLogo } from "./icons/nodejs-icon.svg";
import { ReactComponent as ExpressLogo } from "./icons/express.svg";
import { ReactComponent as FlaskLogo } from "./icons/flask.svg";
import { ReactComponent as PostgreSQLLogo } from "./icons/postgresql.svg";
import { ReactComponent as ApolloLogo } from "./icons/apollostack.svg";
import { ReactComponent as JQueryLogo } from "./icons/jquery.svg";
import { ReactComponent as AxiosLogo } from "./icons/axios.svg";
import { ReactComponent as JestLogo } from "./icons/jest.svg";
import { ReactComponent as AWSS3Logo } from "./icons/aws-s3.svg";
import { ReactComponent as VSCodeLogo } from "./icons/vscode.svg";
import { ReactComponent as InsomniaLogo } from "./icons/insomnia.svg";
import { ReactComponent as GitLogo } from "./icons/git.svg";
import { ReactComponent as GitHubLogo } from "./icons/github.svg";

/**
 * TODO:
 */
function Skills() {

    let debugStyle = {
        // border: "1px solid red" 
    };
    let logoStyle = { display: "flex", flexDirection: "column", alignItems: "center" }

    let logoHeight = "100px";
    let logoWidth = "80px";

    return (
        <AnimatePresence>
            <motion.div
                initial={animationSettings.initial}
                animate={animationSettings.animate}
                exit={animationSettings.exit}
            >
                <Typography variant="h2" gutterBottom>
                    Skills
                </Typography>
                <Container>
                    <Grid container spacing={4} style={debugStyle}>
                        <Grid xs={2} style={debugStyle} display="flex" alignItems="center">
                            <Typography variant="h6" gutterBottom>
                                Languages
                            </Typography>
                        </Grid>
                        <Grid xs={10} style={debugStyle}>
                            <Grid container spacing={6} style={debugStyle}>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <JavaScriptLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        JavaScript
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <TypeScriptLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        TypeScript
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <PythonLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        Python
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <HTMLLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        HTML
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <CSSLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        CSS
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <SQLLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        SQL
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={2} style={debugStyle} display="flex" alignItems="center">
                            <Typography variant="h6" gutterBottom>
                                Frameworks & Libraries
                            </Typography>
                        </Grid>
                        <Grid xs={10} style={debugStyle}>
                            <Grid container spacing={6} style={debugStyle}>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <ReactLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        React
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <ExpressLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        Express
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <FlaskLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        Flask
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <PostgreSQLLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        PostgreSQL
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <GraphQLLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        GraphQL
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={2} style={debugStyle} display="flex" alignItems="center">
                            <Typography variant="h6" gutterBottom>
                                Tools
                            </Typography>
                        </Grid>
                        <Grid xs={10} style={debugStyle}>
                            <Grid container spacing={6} style={debugStyle}>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <NodeLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        Node
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <JQueryLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        JQuery
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <AxiosLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        Axios
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <JestLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        Jest
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <InsomniaLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        Insomnia
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <GitLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        Git
                                    </Typography>
                                </Grid>
                                <Grid style={{ ...debugStyle, ...logoStyle }}>
                                    <GitHubLogo width={logoWidth} height={logoHeight} />
                                    <Typography variant="p" gutterBottom>
                                        GitHub
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </motion.div>
        </AnimatePresence>
    )
}


export default Skills;