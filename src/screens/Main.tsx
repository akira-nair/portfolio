import { Box, HStack, Heading, Image, Text, VStack, transition } from "@chakra-ui/react";
import Screen from "./Screen";
import { delay, motion } from "framer-motion";
import { Suspense } from "react";
export default function Main() {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: {staggerChildren: 0.1 } },
      };
    
      const charVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0},
      };
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
                transition={{ duration: 1, delay: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0},
                  hidden: { opacity: 0, x: -100}
                }}
               >
                        <Image src="assets/crane.png" /></motion.div>
                    </Box>
                    
                    {/* <Box width={'50%'}> */}
                    <motion.div 
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         transition={{ duration: 1 , delay: 0.5}}
                         variants={{
                           visible: { opacity: 1, x: 0},
                           hidden: { opacity: 0, x: 100}
                         }}
                        >
                    <VStack alignItems={'left'} textAlign={'left'} spacing={10}>
                    
                        <Text fontSize={'2em'}>
                            <motion.div variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}>
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

                        
                        <Text>Aspiring Computational Biologist </Text>
                        <Text>Computer Science @ Brown </Text>
                        <Text>Graduate Group in Computational Biology @ Penn </Text>
                    </VStack>
                    </motion.div>
                    {/* </Box> */}
                </HStack>

            </Box>
        </Screen>
        </Suspense>
        
    )
}