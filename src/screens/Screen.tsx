import { Box } from "@chakra-ui/react";

export default function Screen(props: React.PropsWithChildren<{}>) {
    return (
        <Box
            minH="100vh"   
            bg="c2"   
            display="flex"    // Use flexbox to center content vertically
            justifyContent="center"
            alignItems="center"
            color={'white'}
            zIndex={"0"}
            flexDirection={'column'}
        >
            {props.children}
        </Box>
    )
}