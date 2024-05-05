import { Box, Flex, Link, Text} from "@chakra-ui/react";

export default function NavBar() {
    return (
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          padding="2rem"
          bg="c2"
          color="white"
          zIndex="1"
          pos="fixed"   // Fix the navbar position
            top="0"      
        left="0"
        right="0"
        >
          <Flex align="center">
            <Link href="/">
              <Text fontWeight="bold" fontSize="xl" letterSpacing={5}>
                AKIRA NAIR
              </Text>
            </Link>
          </Flex>
          <Box>
            <Flex align="center">
              <Link href="/#about" marginRight="3rem">
                about
              </Link>
              <Link href="/#projects" marginRight="3rem">
                projects
              </Link>
              <Link href="/#publications" marginRight="3rem">
                publications
              </Link>
              <Link href="/resume" marginRight="3rem">
                resume
              </Link>
            </Flex>
          </Box>
        </Flex>
      );
}