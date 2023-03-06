import { Container } from "@mui/material";
import { Stack } from "@mui/system";
/**
 * Footer: 
 */
function Footer() {
    const iconPxWidth = 40;
    return (
        <Container style={{ position: "absolute", left: 0, bottom: 0, right: 0 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Stack mt={5} mb={5} width="500px" direction={"row"} justifyContent="space-around">
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
            </div>
        </Container>
    )
}


export default Footer;