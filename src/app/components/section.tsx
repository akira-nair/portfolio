import { Box, Divider, Text, VStack } from "@chakra-ui/react"


interface SectionProps {
    title: string
    desc: string
    divideOnTop?: boolean
}

export default function Section(sectionProps: SectionProps) {
    // Creates a section on the home page
    return(
        <div>
            {/* If divideOnTop is true */}
            
            <Box paddingTop={'50px'} maxW={'1000px'} mx="auto" textAlign="center">
                <VStack spacing={3} verticalAlign={'true'}>
                    <Text color={'white'} letterSpacing={8} fontSize='25px'> {sectionProps.title} </Text>
                    {sectionProps.divideOnTop && <Divider borderColor={'white'} />}
                    <Text color={'white'} letterSpacing={2} fontSize='15px' fontWeight={'light'}> {sectionProps.desc} </Text>
                </VStack>
            </Box>
        </div>
    )
}