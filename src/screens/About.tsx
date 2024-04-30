import { Box, HStack, Image, VStack, Text, Avatar, Flex } from "@chakra-ui/react";

export default function About() {
    return (
        <Box
            minH="100vh"      // Set minimum height to 100% of viewport height
            bg="c2"     // Example background color
            display="flex"    // Use flexbox to center content vertically
            justifyContent="center"
            alignItems="center"
            color={'white'}
            zIndex={"0"}
        >
            {/* Your content for this section */}
            <Box>
                <Flex direction={'row'} padding={'20%'} margin={'auto'} gap={'5%'}>
                    <Box  alignItems={"center"}>
                        <Box
                            width="20vw"
                            height="20vw"
                            borderRadius="50%"
                            overflow="hidden"
                            position="relative"
                            boxShadow="0 0 10px #ffffff" // Add a glow effect
                            alignItems={"center"}
                            alignSelf={"center"}
                        >
                            <img
                                src="/assets/profile.jpg" // Path to your image
                                alt="Profile"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }} // Make the image cover the circular frame
                            />
                        </Box>
                    </Box>

                    <Box  textAlign={'left'}>
                        <Text fontWeight={'bold'} fontSize={'1.3em'} paddingBottom={'20px'}>
                            ABOUT ME
                        </Text>
                        <Text fontSize={'1.3em'}>
                            Hello! <br />
                            I am a senior at Brown University studying Computer Science under the Computational Biology and Artificial Intelligence tracks. <br />
                            I am interested in leveraging AI and software to accelerate our understanding of human biology and ultimately create effective solutions to treat disease. </Text>
                    </Box>
                </Flex>

            </Box>
        </Box>
    )
}