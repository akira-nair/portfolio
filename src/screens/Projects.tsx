import { Box, Card, SimpleGrid, Image, Text, VStack, Link } from "@chakra-ui/react";
import Screen from "./Screen";


function ProjectCard(props: { project: string, company: string, description: string, image?: string, href: string }) {
    return (
        <Card background={'transparent'} color={'white'} onClick={() => {
        }}>
            <Link href={props.href}>
            <Box boxSize='sm'>
                <Image src={props.image ? props.image : 'assets/project-card-default.png'} borderRadius={10} />

                <Text fontWeight={'bold'} fontSize={'1.5em'} marginTop={'10px'}>
                    {props.company} • {props.project}
                </Text>
                <Text>
                    {props.description}
                </Text>
            </Box>
            </Link>
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



export default function Projects() {
    return (
        <div>
            <Screen>
                <ProjectHeader text="SOFTWARE ENGINEERING & DESIGN" />
                <SimpleGrid columns={2} marginTop={'5%'} spacing={20}>
                    <ProjectCard project={"Yoenten"} company={"Jatshoen"} description={"Developed a web app to aid students in Bhutan in searching for schools based on location, tuition fees, and academic programs."} href="/projects/jatshoen-yoenten"  />
                    <ProjectCard project={"Seljay"} company={"Jatshoen"} description={"Developed a mobile app that teaches users how to write in Dzongkha."} href="/projects/jatshoen-seljay" image="assets/projects/seljay/seljay_banner.png"/>
                    <ProjectCard project={"IMSLP Redesign"} company={"UIUX"} description={"Developed a web app to aid students in Bhutan in searching for schools based on location, tuition fees, and academic programs."} href="/projects/uiux-redesign" image="assets/projects/uiux-imslp/imslp_banner.png" />
                    <ProjectCard project={"Song Cards"} company={"UIUX"} description={"Developed a mobile app that teaches users how to write in Dzongkha."} href="/projects/uiux-development" image="assets/projects/uiux-songcards/songcards_banner.png" />
                </SimpleGrid>
            </Screen>
            <Screen>
                <ProjectHeader text="DEEP LEARNING" />
            </Screen>
        </div>
    )
}