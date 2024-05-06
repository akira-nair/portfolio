import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import About from "../screens/About";
import Main from "../screens/Main";
import Projects from "../screens/Projects";
import { motion } from "framer-motion";
export default function Home() {
    const [loaded, setLoaded] = useState(false)
    useEffect(()=> {
        setLoaded(true)
    })

    return (
        loaded ? <div>
            <NavBar />
                <motion.div id="main"><Main /></motion.div>
                <motion.div id="about"><About /></motion.div>
                <motion.div id="projects"><Projects /></motion.div>
        </div>: null
        
    )

}