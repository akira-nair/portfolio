import { Box, Drawer, VStack, useDisclosure, Text } from "@chakra-ui/react"
import CaseStudy, { CaseStudyHeader, CaseStudyImage, CaseStudyInsight, CaseStudyParagraph } from "../CaseStudy"

export default function SongCard() {
    return (
        <CaseStudy name="Song Cards" company="UIUX" role="Designer and Front-End Developer" github={"https://github.com/akira-nair/csci1300-development"} dates={"April 2024"} skills={["React", "Figma", "Chakra UI", "Typescript"]} banner="../../assets/projects/uiux-songcards/songcards_banner.png" link="https://csci1300-development.vercel.app/">
            <CaseStudyHeader>OVERVIEW</CaseStudyHeader>
            <CaseStudyParagraph>The purpose of this assignment is to practice using React to create a basic app with a filtering, aggregating, and sorting function. For my app, I decided to create a music playlist maker. I listen to music from a lot of different genres, so I created a filter for selecting songs of a particular language to add to the playlist. I also added a slider filter for song duration, which can be helpful for identifying short vs. long songs. Finally, I added a sorting functionality for duration, to order songs from shortest to longest. When adding songs to the playlist, the total length of the playlist is also shown. </CaseStudyParagraph>
            <CaseStudyHeader>APP IN ACTION</CaseStudyHeader>
            <CaseStudyImage src="../../assets/projects/uiux-songcards/app1.png" />
            <CaseStudyImage src="../../assets/projects/uiux-songcards/app2.png" />
            <CaseStudyInsight message="One of the challenges for me was keeping track of several useState hooks. For example, when adding a song to the playlist, not only is the list of songs shown on the right modified, but also the total duration count must be changed and the song card button's text going from Add to Playlist to Remove from Playlist. This exercise made me realize how multiple aspects of the UI can rely on the same state object." />
            <CaseStudyHeader>NEXT STEPS</CaseStudyHeader>
            <CaseStudyParagraph>If I had more time, I would work on making my app more compatible for different devices (responsiveness). It took a lot of time creating the layout I wanted to the app and setting up all the functionality.</CaseStudyParagraph>


        </CaseStudy>
    )
}