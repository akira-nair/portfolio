import NavBar from "../components/NavBar";
import About from "../screens/About";
import Main from "../screens/Main";
import Projects from "../screens/Projects";

export default function Home() {
    return (
        <div>
            <NavBar />
            <div id="main"><Main /></div>
            <div id="about"><About /></div>
            <div id="projects"><Projects /></div>
        </div>
    )

}