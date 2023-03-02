import { Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Stack } from "@mui/system";
import { motion } from "framer-motion"


/**
 * Contact: 
 */
function Contact() {

    const linkStyle = { textDecoration: "none", color: "inherit" };

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <Typography variant="h2" gutterBottom>
                Get in touch
            </Typography>
            <Stack ml={4}>
                <Stack direction="row" gap={6}>
                    <MailOutlineIcon fontSize="large"></MailOutlineIcon>
                    <Typography variant="h6" color="primary">
                        <a style={linkStyle} href="mailto:domenico.martinucci@gmail.com">
                            domeninco.martinucci@gmail.com
                        </a>
                    </Typography>
                </Stack>
            </Stack>
        </motion.div>
    )
}


export default Contact;