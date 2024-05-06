import { Box } from "@chakra-ui/react";
import {motion, useAnimation, useInView} from "framer-motion"
import { useEffect, useRef } from "react";



export default function Screen(props: React.PropsWithChildren<{}>) {
    // const viewRef = useRef(null)
    // const isInView = useInView(viewRef, {amount: 0.2})

    // const animator = useAnimation()
    // useEffect(() => {
    //     if (isInView) {
    //         animator.start("show")
    //     }
    // }, [isInView])

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
            {/* <motion.div variants={{
                hide: {opacity:0, y: 50},
                show: {opacity:1, y: 0},
            }}
            initial="hide"
            animate={animator}
            transition={{duration: 0.5, delay: 0.1, ease: [0.1, 0.3, 0.8, 1]}}> */}
                <div>
                {props.children}
                </div>
            {/* </motion.div> */}
        </Box>
    )
}