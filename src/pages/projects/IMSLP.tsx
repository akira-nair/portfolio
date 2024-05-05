import { Box, Drawer, VStack, useDisclosure, Text } from "@chakra-ui/react"
import CaseStudy from "../CaseStudy"

export default function IMSLP() {
    return (
        <CaseStudy name="IMSLP Redesign" company="UIUX" role="Designer" github={"https://akira-nair.github.io/imslp-responsive-redesign/"} dates={"March 2024"} skills={["React", "Figma", "HTML/CSS"]} banner="../../assets/projects/uiux-imslp/imslp_banner.png">
            <Text fontSize={'1.5em'} marginTop={'30px'}>BRIEF</Text>
                <Text>The purpose of this assignment is to... </Text>
        </CaseStudy>
    )
}