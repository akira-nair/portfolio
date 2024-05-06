import { Box, Drawer, VStack, useDisclosure, Text, Link, HStack, SimpleGrid } from "@chakra-ui/react"
import CaseStudy, { CaseStudyHeader, CaseStudyImage, CaseStudyInsight, CaseStudyParagraph } from "../CaseStudy"

export default function Seljay() {
    return (
        <CaseStudy name="Seljay" company="Jatshoen" role="Mobile App Developer" github={"https://www.github.com/jatshoen/"} dates={"Jan 2024 - May 2024"} skills={["React Native", "Figma", "Expo", "Typescript"]} banner="../../assets/projects/seljay/seljay_banner.png" link="https://apps.apple.com/us/app/seljay/id6477336572">
            <CaseStudyHeader>BRIEF</CaseStudyHeader>
            {/* <Text fontSize={'1.5em'} marginTop={'30px'}>BRIEF</Text> */}
            <CaseStudyParagraph>Seljay is a mobile app I designed and built with the Jatshoen team to teach students and language learners how to write in the Dzongkha script. The app offers step-by-step stroke guidance and audio pronunciation for each of the consonants in the Dzongkha alphabet. Characters are organized into lessons, grouped by phonetic categories. As a user practices writing the characters, progress in the app is saved. </CaseStudyParagraph>
            <CaseStudyHeader>DZONGKHA ALPHABET</CaseStudyHeader>
            <CaseStudyParagraph>Dzongkha is the national language of Bhutan, a small country nestled in the Himalayas. It has roughly 640,000 total speakers. For its written form, Dzongkha adopts the Tibetan alphabet, which has 30 basic letters. However, Dzongkha has its variations for notating each of the characters, the three most prominent forms being Jôyi (cursive longhand), Jôtshum (formal longhand), and Tshûm (used for prints). </CaseStudyParagraph>
            <CaseStudyImage src="../../assets/projects/seljay/dzongkha_alphabet.jpeg" />
            <CaseStudyHeader>DESIGN</CaseStudyHeader>
            <CaseStudyParagraph>Before implementing our app, we designed a basic prototype in Figma to organize the layout of our components. We use Inter as our English font and Joyig as our Dzongkha font.</CaseStudyParagraph>
            <CaseStudyImage src="../../assets/projects/seljay/seljay_prototype.png" />
            <CaseStudyParagraph>For each character, we have a practice screen that includes a stencil of the character that users are instructed to draw over. After the user practices writing the character, we hide the stencil to test if the user can draw the character from memory. </CaseStudyParagraph>
            <CaseStudyInsight message="Dzongkha is unique in that multiple different scripts are used in different contexts and formalities. As a result, teaching a user how to write using one font may not be sufficient for writing in other settings. We choose Joyig as our font as it is the most commonly adopted font in Bhutan."/>
            <CaseStudyHeader>IMPLEMENTATION</CaseStudyHeader>
            <CaseStudyParagraph>We developed our app using React Native Expo. We began by developing the basic practice screen for a single character, displaying the character, a button that plays the character's sound, a stroke animation gif, and a button to bring up the drawing board. One of the challenges of our project was developing a backend to evaluate the quality of a user's stroke pattern. Luckily, there exists a package for evaluating curve similarities called <Link href="https://github.com/chanind/curve-matcher">curve matcher</Link> that we adopted for this project to compare a user's query against our reference character strokes. </CaseStudyParagraph>
            <CaseStudyParagraph>Afterwards, we extended this framework to all the remaining characters, and used Expo storage to store a user's progress locally on their device. We used EAS (Expo Application Services) to deploy our app to iOS TestFlight, and ultimately published Seljay on the app store.</CaseStudyParagraph>
            <SimpleGrid columns={2}>
                <CaseStudyImage src="../../assets/projects/seljay/phone1.png" />
                <CaseStudyImage src="../../assets/projects/seljay/phone2.png" />
            </SimpleGrid>
            
        </CaseStudy>
    )
}