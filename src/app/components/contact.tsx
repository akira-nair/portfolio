import { Icon, VStack, Text, Highlight, Heading, Box, HStack } from "@chakra-ui/react";
import Section from "./section";
import { FadeIn } from "./utils/animations";
import { EmailIcon } from "@chakra-ui/icons";



export default function Contact() {

    return (
        <section id="contact">
            <FadeIn>
                <Section title="CONTACT" desc="" divideOnTop />
                <Box maxW={'80%'} mx='auto' padding={'30px'} alignItems={'center'}>
                    <HStack alignContent={'center'}>
                        <EmailIcon color='white' />
                        <Text color={'white'} fontSize={'md'} paddingBottom={'10px'}>
                            <a href="mailto:akira_nair@brown.edu "> akira_nair@brown.edu </a>
                        </Text>
                    </HStack>
                </Box>
            </FadeIn>
        </section>
    )
}