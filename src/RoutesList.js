import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";

/**
 * RoutesList: 
 */
function RoutesList() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}


export default RoutesList;