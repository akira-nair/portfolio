import { Box, Card, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";


function ProjectCard(props: { project: string, company: string, description: string, image?: string }) {
    return (
        <Card background={'transparent'} color={'white'}>
            <Box boxSize='sm'>
                <Image src={'assets/project-card-default.svg'} />

                <Text fontWeight={'bold'} fontSize={'1.5em'} marginTop={'10px'}>
                    {props.company} • {props.project}
                </Text>
                <Text>
                    {props.description}
                </Text>
            </Box>
        </Card>
    )
}

function ProjectHeader(props: { text: string }) {
    return (
        <Box alignItems={'center'}>
            <VStack spacing={30}>
                <Text fontSize={'1.5em'} letterSpacing={20}>
                    {props.text}
                </Text>
                <Image src="assets/divider.svg" />
            </VStack>
        </Box>
    )
}

function Screen(props: React.PropsWithChildren<{}>) {
    return (
        <Box
            minH="100vh"      // Set minimum height to 100% of viewport height
            bg="c2"     // Example background color
            display="flex"    // Use flexbox to center content vertically
            justifyContent="center"
            alignItems="center"
            color={'white'}
            zIndex={"0"}
            flexDirection={'column'}
        >
            {props.children}
        </Box>
    )
}

// function ProjectSection() {
//     return (
//         <Box
//             minH="100vh"      // Set minimum height to 100% of viewport height
//             bg="c2"     // Example background color
//             display="flex"    // Use flexbox to center content vertically
//             justifyContent="center"
//             alignItems="center"
//             color={'white'}
//             zIndex={"0"}
//             flexDirection={'column'}
//         >
//             <ProjectHeader text="SOFTWARE ENGINEERING" />
//             <SimpleGrid columns={2} marginTop={'5%'} spacing={20}>
//                 <ProjectCard project={"Yoenten"} company={"Jatshoen"} description={"Developed a web app to aid students in Bhutan in searching for schools based on location, tuition fees, and academic programs."} />
//                 <ProjectCard project={"Seljay"} company={"Jatshoen"} description={"Developed a mobile app that teaches users how to write in Dzongkha."} />
//             </SimpleGrid>
//         </Box>
//     )

// }

export default function Projects() {
    return (
        <div>
            <Screen>
                <ProjectHeader text="SOFTWARE ENGINEERING" />
                <SimpleGrid columns={2} marginTop={'5%'} spacing={20}>
                    <ProjectCard project={"Yoenten"} company={"Jatshoen"} description={"Developed a web app to aid students in Bhutan in searching for schools based on location, tuition fees, and academic programs."} />
                    <ProjectCard project={"Seljay"} company={"Jatshoen"} description={"Developed a mobile app that teaches users how to write in Dzongkha."} />
                </SimpleGrid>
            </Screen>
            <Screen>
                <ProjectHeader text="DESIGN" />
                <SimpleGrid columns={2} marginTop={'5%'} spacing={20}>
                    <ProjectCard project={"IMSLP Redesign"} company={"UIUX"} description={"Developed a web app to aid students in Bhutan in searching for schools based on location, tuition fees, and academic programs."} />
                    <ProjectCard project={"Song Cards"} company={"UIUX"} description={"Developed a mobile app that teaches users how to write in Dzongkha."} />
                </SimpleGrid>
            </Screen>
            <Screen>
                <ProjectHeader text="DEEP LEARNING" />
            </Screen>
        </div>
    )
}