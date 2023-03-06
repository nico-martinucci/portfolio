import { Typography, Stack } from "@mui/material";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { motion, AnimatePresence } from "framer-motion"
import animationSettings from "./pageAnimations";

/**
 * Resume: 
 */
function Resume() {

    const linkStyle = { textDecoration: "none", color: "inherit" };

    return (
        <AnimatePresence>
            <motion.div
                initial={animationSettings.initial}
                animate={animationSettings.animate}
                exit={animationSettings.exit}
            >
                <Typography variant="h2" gutterBottom>
                    Resume
                </Typography>
                <Stack ml={4}>
                    <Stack direction="row" gap={6}>
                        <FilePresentIcon fontSize="large"></FilePresentIcon>
                        <Typography variant="h6" color="primary">
                            <a style={linkStyle} href="https://drive.google.com/file/d/1MgTySwidl4XdWCi0uiNPs55GcYtT6tjO/view?usp=sharing" target="_blank">
                                Click here to download a PDF
                            </a>
                        </Typography>
                    </Stack>
                </Stack>
            </motion.div>
        </AnimatePresence>
    )
}


export default Resume;