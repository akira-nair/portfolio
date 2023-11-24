import { Container, Image } from "@chakra-ui/react";

export default function About() {
    return(
        <Container maxW="container.xl" centerContent paddingTop={'50px'}>
        <Image src="./main-profile-sq.jpg" alt="Akira Profile" borderRadius="full" maxH={'300px'}/>
        </Container>
    )
    
}