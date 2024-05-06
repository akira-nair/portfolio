import { Box, Drawer, VStack, useDisclosure, Text, Link, UnorderedList, ListItem, Heading, SimpleGrid } from "@chakra-ui/react"
import CaseStudy, { CaseStudyHeader, CaseStudyImage, CaseStudyParagraph } from "../CaseStudy"

export default function IMSLP() {
    return (
        <CaseStudy name="IMSLP Redesign" company="UIUX" role="Designer" github={"https://github.com/akira-nair/imslp-responsive-redesign"} dates={"March 2024"} skills={["React", "Figma", "HTML/CSS"]} banner="../../assets/projects/uiux-imslp/imslp_banner.png" link="https://akira-nair.github.io/imslp-responsive-redesign/">
            <CaseStudyHeader>PURPOSE</CaseStudyHeader>
            <CaseStudyParagraph>The purpose of this assignment is to evaluate an existing interface for accessibility, visual design, responsiveness, and usability and then by following the design process, develop a new responsive design addressing the issues found in the original interface.</CaseStudyParagraph>
            <CaseStudyHeader>BACKGROUND</CaseStudyHeader>
            <CaseStudyParagraph>For my assignment, I chose to redesign <Link href="https://imslp.org/wiki/Main_Page">IMSLP</Link>, which stands for the International Music Score Library Project. IMSLP is a website commonly used by classical musicians to search for and download sheet music and recordings of classical music available in the public domain. However, the website has not been updated in several years, and because of its popularity, a redesign would help improve its ease-of-use for many musicians and music scholars.</CaseStudyParagraph>
            <CaseStudyHeader>EVALUATION</CaseStudyHeader>
            <CaseStudyParagraph>I began by searching IMSLP for various issues relating to usability and accessibility. Here was a list of issues I noticed as a user.
                <UnorderedList>
                    <ListItem>There are two search bars in the home page, unclear the difference between the two</ListItem>
                    <ListItem>The “Other” tap has confusing functions and information not needed to be accessed by most users</ListItem>
                    <ListItem>There is no ability to sort or filter results except using the very small buttons</ListItem>
                    <ListItem>While there is an option to change language, it is hard to find on the page, leading to accessibility issues (this website is used all around the world, particularly in different European countries)</ListItem>
                    <ListItem>When searching, the results show up in a new google search window, which is a completely different UI than the main page (it would be better to have the results all in one interface rather than combining with a 3rd party)</ListItem>
                    <ListItem>There is an advertisement for a new branded design called IMSLP Clara but the advertisement is a screenshot with a toggle button saying “switch to new skin” but the button does not actually work; it just is a popup link to a new website</ListItem>
                </UnorderedList>
                Here is a screenshot of the IMSLP website, alongside an assessment on accessibility.
                <CaseStudyImage src="../../assets/projects/uiux-imslp/acc-eval.png" />
            </CaseStudyParagraph>
            <CaseStudyHeader>VISUAL REDESIGN</CaseStudyHeader>
            <Text fontStyle={'italic'}>Sketches</Text>
            <CaseStudyParagraph>
                My design process began with 9 sketches of potential redesigns. I gave myself roughly 9 minutes to complete these sketches.
            </CaseStudyParagraph>
            <SimpleGrid columns={3}>
                <CaseStudyImage src="../../assets/projects/uiux-imslp/sketch1.JPG" />
                <CaseStudyImage src="../../assets/projects/uiux-imslp/sketch2.JPG" />
                <CaseStudyImage src="../../assets/projects/uiux-imslp/sketch3.JPG" />
            </SimpleGrid>
            <CaseStudyParagraph>My final sketch I chose to work with was the following:</CaseStudyParagraph>
            <CaseStudyImage src="../../assets/projects/uiux-imslp/lofi-final-sketch.JPG" />
            <Text fontStyle={'italic'}>Lo-Fi Mockups</Text>
            <CaseStudyParagraph>The next step involved extending my final sketch to three wireframes, corresponding to mobile, tablet, and desktop interfaces.</CaseStudyParagraph>
            <SimpleGrid columns={3}>
                <CaseStudyParagraph>
                    <b>Mobile</b>
                </CaseStudyParagraph>
                <CaseStudyParagraph>
                    <b>Tablet</b>
                </CaseStudyParagraph>
                <CaseStudyParagraph>
                    <b>Desktop</b>
                </CaseStudyParagraph>
                <CaseStudyImage src="../../assets/projects/uiux-imslp/lofi-mobile.JPG" />
                <CaseStudyImage src="../../assets/projects/uiux-imslp/lofi-tablet.JPG" />
                <CaseStudyImage src="../../assets/projects/uiux-imslp/lofi-desktop.JPG" />
            </SimpleGrid>
            <CaseStudyHeader>Style Guide</CaseStudyHeader>
            <CaseStudyParagraph>After completing the low-fidelity mockups, I transitioned into Figma to complete a high-fidelity mockup. I created the following style guide to define various elements, such as buttons, icons, fonts, font weights, and color palette.</CaseStudyParagraph>
            <CaseStudyImage src="../../assets/projects/uiux-imslp/hifi-visualguide.png" />
            <Text fontStyle={'italic'}>Hi-Fi Mockups</Text>
            <SimpleGrid columns={3}>
                <CaseStudyParagraph>
                    <b>Mobile</b>
                </CaseStudyParagraph>
                <CaseStudyParagraph>
                    <b>Tablet</b>
                </CaseStudyParagraph>
                <CaseStudyParagraph>
                    <b>Desktop</b>
                </CaseStudyParagraph>
                <CaseStudyImage src="../../assets/projects/uiux-imslp/hifi-mobile.png" />
                <CaseStudyImage src="../../assets/projects/uiux-imslp/hifi-tablet.png" />
                <CaseStudyImage src="../../assets/projects/uiux-imslp/hifi-desktop.png" />
            </SimpleGrid>
            <CaseStudyHeader>Responsive Redesign</CaseStudyHeader>
            <CaseStudyParagraph>My final design tries to aggregate the primary functionality of IMSLP into one area in the screen. The original IMSLP website has lots of buttons, many with very obscure features that would not be used by the normal user. In my revised interface, I present a screen where users can easily search for scores and recordings and filter based on the same criteria as the original website (composition date, composer, etc.). The original IMSLP website also had two navigation features (one was a dropdown, and the other a bar). To simplify this part of the interface, I simply included the relevant navigation features as a navigation bar component at the top of the page. The main change to the design, however, is keeping the media results on the same page as the query. The original design uses a Google Search channel to find results, which presents an inconsistent UI design and unnecessary navigation confusion. By embedding everything into one screen, I hope that my design simplifies the search process for users. Here are some screenshots of my final redesign!</CaseStudyParagraph>
            <SimpleGrid columns={3}>
                <CaseStudyParagraph>
                    <b>Mobile</b>
                </CaseStudyParagraph>
                <CaseStudyParagraph>
                    <b>Tablet</b>
                </CaseStudyParagraph>
                <CaseStudyParagraph>
                    <b>Desktop</b>
                </CaseStudyParagraph>
                <CaseStudyImage src="../../assets/projects/uiux-imslp/final-mobile.png" />
            <CaseStudyImage src="../../assets/projects/uiux-imslp/final-tablet.png" />
            <CaseStudyImage src="../../assets/projects/uiux-imslp/final-desktop.png" />
            </SimpleGrid>
            
            <CaseStudyParagraph>Finally, to evaluate accessability, I used a WAVE test to determine areas of poor accessibility. As you can see, my design performs fairly well in the WAVE evaluation.</CaseStudyParagraph>
            <CaseStudyImage src="../../assets/projects/uiux-imslp/final-wave-eval.png"/>
            <CaseStudyHeader>Concluding Remarks and Reflection</CaseStudyHeader>
            <CaseStudyParagraph>I noticed that going from my high-fidelity mockup to my responsive redesign was quite a time-consuming process. If I had more time, I would have liked to perfect more of the components of the interface, such as hover animations and incorporating more icons. I think that while my final design resembles my initial sketch, I learned the the design process seems to involve several iterative changes across the stages. For example, I did not realize that the color palette I had chosen initially would have contrast issues in my final design, thus I had to make some of the colors darker to address accessibility issues. Finally, making the design adapt to different screen sizes is a big challenge. It is almost like building separate designs for different devices. I am curious as to approaches of making this process easier. I found the assignment very helpful in refining my HTML/CSS skills, especially in using different display formats (flex vs. grid, justify-content) to align elements the way I had in my mockups.</CaseStudyParagraph>




        </CaseStudy>
    )
}