import { Box, Drawer, Heading, VStack, Text, useDisclosure, DrawerOverlay, DrawerContent, IconButton, HStack, Image, Tag, TagLabel, Button, Link, Icon } from "@chakra-ui/react";
import Screen from "../screens/Screen";
import { ArrowBackIcon, ArrowLeftIcon, CloseIcon, HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoOrganization } from "react-icons/go";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { ReactNode, useState } from "react";
function CaseInfoPanel(props: { role: string, company: string, github: string, dates: string, skills: string[] }) {
    return (
        <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'} borderRadius={10} padding={'1.5%'} color={'white'} backgroundColor={'rgba(128, 128, 128, 0.5)'}>
            <VStack gap={'20px'}>
                <HStack gap={'12'}>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <IoPersonCircleOutline />
                        <Text paddingLeft={'10px'}>{props.role}</Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <GoOrganization />
                        <Text paddingLeft={'10px'}>{props.company}</Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <MdOutlineDateRange />
                        <Text paddingLeft={'10px'}>{props.dates}</Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        
                        <FaCode />
                        <Link isExternal href={props.github}><Text paddingLeft={'10px'}>Code</Text></Link>
                    </Box>
                </HStack>
                <HStack>
                    {props.skills.map((v, i) => (
                        <Tag>
                            <TagLabel>{v}</TagLabel>
                        </Tag>))}
                </HStack>
            </VStack>
        </Box>
    )
}

export function CaseStudyHeader(props: {children?: ReactNode}) {
    return (
        <Text fontSize={'1.5em'} marginTop={'30px'}>
            {props.children}
        </Text>
    )
}

export function CaseStudyParagraph(props: {children?: ReactNode}) {
    return (
        <Text textAlign={'justify'}>
            {props.children}
        </Text>
    )
}

export function CaseStudyImage(props: {src: string}) {
    return (
        <Image margin={'2em'} src={props.src} maxWidth={'90%'} />
    )
}

export function CaseStudyInsight(props: {message: string}) {
    return (
        <Box width={'100%'}backgroundColor={'c4'} borderRadius={10} paddingY={'1em'} paddingLeft={'3%'} paddingRight={'5%'}>
            <HStack gap={5}>
                {/* <Box borderRadius={3}  width={'12px'} height={'12px'} backgroundColor={'c3'}></Box> */}
                <StarIcon />
                <Text textAlign={'justify'}><b>Key Insight: </b>{props.message}</Text>
            </HStack>
        </Box>
    )
}

export default function CaseStudy(props: { name: string, company: string, role: string, skills: string[], dates: string, banner: string, link?: string, github?: string,  children?: ReactNode }) {
    // const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <Box minH={'100vh'} backgroundColor={'c2'} color={'white'} paddingTop={'5%'} alignItems={'center'} paddingLeft={'22%'} paddingRight={'22%'} paddingBottom={'30px'}>
                {/* <IconButton aria-label={"menu-icon-button"} icon={<HamburgerIcon />} onClick={onOpen} position="absolute" top={30} left={30}> Back to Projects</IconButton> */}
                <Link href="/">
                    <HStack marginBottom={5}>
                        <ArrowBackIcon />
                        <Text fontSize={'0.9em'} >
                            Back to projects
                        </Text>
                    </HStack>
                </Link>
                {/* <Text fontWeight={'bold'} color={'c3'} fontSize={'1.5em'}>{props.company}</Text> */}
                {/* <Heading fontSize={'2em'} letterSpacing={10}>{props.name}</Heading> */}
                {/* <Box maxWidth={'50%'} alignContent={'center'} backgroundColor={'transparent'} alignItems={'center'} justifyContent={'center'}> */}
                <VStack maxWidth={'100%'}>
                    <Box 
                    transition="all 0.3s"
                    _hover={{ transform: "scale(1.03)" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    transform={isHovered ? "scale(1.03)" : "scale(1)"}
                    >
                        {/* <Image src="../../assets/seljay_banner.png" borderRadius={'10'} /> */}
                        <Link href={props.link} isExternal>
                        <Image src={props.banner} borderRadius={'10'} />
                        </Link>
                    </Box>
                    <CaseInfoPanel role={props.role} company={props.company} github={props.github ? props.github : ""} dates={props.dates} skills={props.skills} />
                    {props.children}
                    {/* <Text fontSize={'1.5em'} marginTop={'30px'}>BRIEF</Text>
                    <Text>Seljay is a mobile app I designed and built with the Jatshoen team to teach students and language learners how to write in the Dzongkha script. The app offers step-by-step stroke guidance and audio pronunciation for each of the consonants in the Dzongkha alphabet. Characters are organized into lessons, grouped by phonetic categories. As a user practices writing the characters, progress in the app is saved. </Text> */}
                </VStack>
                {/* </Box> */}
                {/* <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                >
                    {/* <DrawerOverlay /> */}
                {/* <DrawerContent>
                        <Box>
                            <Box padding={'5%'}>
                                <IconButton size={'xs'} aria-label={"menu-icon-button"} icon={<CloseIcon />} onClick={onClose} backgroundColor={'transparent'} />
                            </Box>
                            <VStack paddingTop={'30%'}>
                                <Link href="/">
                                <HStack marginBottom={10}>
                                    <ArrowBackIcon />
                                    <Text >
                                        Back to projects
                                    </Text>
                                </HStack>
                                </Link>
                                <Text fontSize={'1.3em'}>
                                    Guide
                                </Text>
                            </VStack>
                        </Box>
                    </DrawerContent> */}
                {/* </Drawer> */}
            </Box>
        </div>
    )
}