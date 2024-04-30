import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function Main() {
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
            <Box textAlign="left">
                {/* AKIRA // 昭良  NAIR // നായർ */}
                <HStack>
                    <Box width={'50%'}>
                        <Image src="assets/crane.png" />
                    </Box>
                    {/* <Box width={'50%'}> */}
                        <VStack alignItems={'left'} textAlign={'left'} spacing={10}>
                        <Text fontSize={'2em'}>
                            <Text as="span" fontWeight="bold">AKIRA </Text>
                            <Text as="span">// </Text>
                            <Text as="span" color="orange">昭良 </Text>
                            <Text as="span" fontWeight="bold"> • NAIR </Text>
                            <Text as="span">// </Text>
                            <Text as="span" color="orange">നായർ</Text>
                        </Text>
                        <Text>Aspiring Computational Biologist </Text>
                        <Text>Computer Science @ Brown </Text>
                        <Text>Graduate Group in Computational Biology @ Penn </Text>
                        </VStack>
                    {/* </Box> */}
                </HStack>

            </Box>
        </Box>
    )
}