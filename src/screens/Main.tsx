import { Box, HStack, Heading, Image, Text, VStack, transition } from "@chakra-ui/react";
import Screen from "./Screen";
import { AnimatePresence, delay, motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
export default function Main() {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 1 } },
    };

    const textsLoop = ['Computational Biologist', 'AI/ML Engineer', 'Software Developer']
    const loopVariants = {
        enter: () => {
          return {
            y: -20,
            opacity: 0,
          };
        },
        center: {
          zIndex: 1,
          y: 0,
          opacity: 1
        },
        exit: () => {
          return {
            zIndex: 0,
            y: 10, 
            opacity: 0
          };
        }
      };
    const charVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            let next = index + 1;
            if (next === textsLoop.length) {
                next = 0;
            }
            setIndex(next);
        }, 2.2 * 1000);
    }, [index, setIndex]);
    return (
        <Suspense fallback={<Screen />}>
            <Screen>
                {/* Your content for this section */}
                <Box textAlign="left">
                    {/* AKIRA // 昭良  NAIR // നായർ */}
                    <HStack>

                        <Box width={'50%'}>
                            <motion.div

                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 1 }}
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: -100 }
                                }}
                            >
                                <Image src="assets/crane.png" /></motion.div>
                        </Box>

                        {/* <Box width={'50%'}> */}

                        <VStack alignItems={'left'} textAlign={'left'} spacing={10}>

                            <Text fontSize={'2em'}>
                                <motion.div variants={textVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}>
                                    <motion.span variants={charVariants}><b>A</b></motion.span>
                                    <motion.span variants={charVariants}><b>K</b></motion.span>
                                    <motion.span variants={charVariants}><b>I</b></motion.span>
                                    <motion.span variants={charVariants}><b>R</b></motion.span>
                                    <motion.span variants={charVariants}><b>A</b></motion.span>
                                    <motion.span variants={charVariants}> // </motion.span>
                                    <motion.span variants={charVariants} color="orange"><Text color={'orange'} as="span">昭</Text></motion.span>
                                    <motion.span variants={charVariants} color="orange"><Text color={'orange'} as="span">良</Text></motion.span>
                                    <motion.span variants={charVariants}><b> • </b></motion.span>
                                    <motion.span variants={charVariants}><b>N</b></motion.span>
                                    <motion.span variants={charVariants}><b>A</b></motion.span>
                                    <motion.span variants={charVariants}><b>I</b></motion.span>
                                    <motion.span variants={charVariants}><b>R</b></motion.span>
                                    <motion.span variants={charVariants}> // </motion.span>
                                    <motion.span variants={charVariants} color="orange"><Text color={'orange'} as="span">നാ</Text></motion.span>
                                    <motion.span variants={charVariants} color="orange"><Text color={'orange'} as="span">യ</Text></motion.span>
                                    <motion.span variants={charVariants} color="orange"><Text color={'orange'} as="span">ർ</Text></motion.span>
                                </motion.div>
                                {/* <Text as="span" fontWeight="bold">AKIRA </Text>
                            <Text as="span">// </Text>
                            <Text as="span" color="orange">昭良 </Text>
                            <Text as="span" fontWeight="bold"> • NAIR </Text>
                            <Text as="span">// </Text>
                            <Text as="span" color="orange">നായർ</Text> */}
                            </Text>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 2.5 }}
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: 100 }
                                }}
                            >
                                <Text as ="span" paddingEnd={'10px'} fontSize={'1.5em'}>Aspiring </Text>
                                
                                <AnimatePresence>
                                    <motion.span
                                        style={{ position: "absolute" }}
                                        variants={loopVariants}
                                        key={index}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            y: { type: "tween"},
                                            opacity: { duration: 0.3 }
                                        }}
                                    >
                                        <Text fontSize={'1.5em'}>{textsLoop[index]}</Text>
                                    </motion.span>
                                </AnimatePresence>
                                {/* <Text>Computer Science @ Brown </Text>
                        <Text>Graduate Group in Computational Biology @ Penn </Text> */}
                            </motion.div>
                        </VStack>
                        {/* </Box> */}
                    </HStack>

                </Box>
            </Screen>
        </Suspense>

    )
}