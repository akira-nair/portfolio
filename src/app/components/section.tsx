import { Box, Text, VStack } from "@chakra-ui/react"


interface SectionProps {
    title: string
    desc: string
}

export default function Section(sectionProps: SectionProps) {
    // Creates a section on the home page
    return(
        <div>
            <Box padding={'10px'} maxW={'1000px'} mx="auto" textAlign="center">
                <VStack spacing={3} verticalAlign={'true'}>
                    <Text color={'white'} letterSpacing={30} fontSize='30px'> {sectionProps.title} </Text>
                    <Text color={'white'} letterSpacing={2} fontSize='20px' fontWeight={'light'}> {sectionProps.desc} </Text>
                </VStack>
            </Box>
        </div>
    )
}