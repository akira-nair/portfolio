import { Container, Image } from "@chakra-ui/react";
import Section from "./section";
import { motion } from "framer-motion";
import { FadeIn } from "./utils/animations";

export default function About() {
    return (
        <div>
        <FadeIn delay={0.5}>
        <Container maxW="container.xl" centerContent paddingTop={'50px'}>
                    <Image src="./main-profile-sq.jpg" alt="Akira Profile" borderRadius="full" maxH={'300px'} />
                </Container>
        <section id="about">
            
                <Section title="ABOUT" desc="Hi, my name is Akira Nair. I am a senior at Brown University studying Computer Science under the Computational Biology and Artificial Intelligence tracks. I am interested in leveraging AI and software to accelerate our understanding of human biology and ultimately create effective solutions to treat disease." divideOnTop />
            
        </section>
        </FadeIn>
        </div>
    )

}