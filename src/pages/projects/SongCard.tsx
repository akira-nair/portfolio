import { Box, Drawer, VStack, useDisclosure, Text } from "@chakra-ui/react"
import CaseStudy from "../CaseStudy"

export default function SongCard() {
    return (
        <CaseStudy name="Song Cards" company="UIUX" role="Designer and Front-End Developer" github={"https://csci1300-development.vercel.app/"} dates={"April 2024"} skills={["React", "Figma", "Chakra UI", "Typescript"]} banner="../../assets/projects/uiux-songcards/songcards_banner.png">
            <Text fontSize={'1.5em'} marginTop={'30px'}>BRIEF</Text>
                <Text>The purpose of this assignment is to practice using React to create a basic app with a filtering, aggregating, and sorting function.For my app, I decided to create a music playlist maker. I listen to music from a lot of different genres, so I created a filter for selecting songs of a particular language to add to the playlist. I also added a slider filter for song duration, which can be helpful for identifying short vs. long songs. Finally, I added a sorting functionality for duration, to order songs from shortest to longest. When adding songs to the playlist, the total length of the playlist is also shown. </Text>
        </CaseStudy>
    )
}