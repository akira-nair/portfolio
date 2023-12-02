import { Icon, VStack, Text, Highlight, Heading, Box } from "@chakra-ui/react";
import Section from "./section";
import { FadeIn } from "./utils/animations";
import { StarIcon } from '@chakra-ui/icons'

const experience1 = {
    title: "Singh Lab @ Brown",
    job: "Undergraduate Research Assistant",
    desc: "I am currently developing a deep learning model under the guidance of Dr. Ritambhara Singh that predicts the survival of lung cancer patients based on genomic, epigenetic, and tissue imaging data. The data being used comes from the Cancer Genome Atlas (TCGA). The model scripts are run on Brown’s computing cluster. The models use self-attention and cross-attention mechanisms. New models are being developed to characterize tumor pathological stage.",
    color: "#788AA3"
}
const experience2 = {
    title: "Allen Institute",
    job: "Summer Research Intern",
    desc: "At the Allen Institute, I worked on developing deep generative models that use single-cell RNA-seq data to accurately map human cell types in the basal ganglia region of the brain. The model scripts are run on Allen Institute HPC clusters. I developed a Python package called TOCANN (Tree Organized Cell Annotating Neural Networks) that takes a reference dendrogram (a cell-type taxonomy) and scRNA-seq data and trains an ensemble of deep learning classifiers to distinguish cell types at each node in the taxonomy.",
    color: "#788AA3"
}

const experience3 = {
    title: "Fred Hutchinson Cancer Institute",
    job: "Summer Research Intern",
    desc: "I worked under the Gavin Ha lab and conducted mutational analysis using variant callers such as SVABA and GRIDSS2. Analysis was done on sequencing data from cell-free DNA samples of prostate cancer patients. I also developed deep learning models that infer tumor transcriptomes based on their cfDNA nucleosome profiles.",
    color: "#788AA3"
}

interface ExperienceProps {
    title: string,
    job: string,
    desc: string,
    color: string,
}

export function Experience(props: ExperienceProps) {
    return (
        <div>
            <Box alignContent={'center'} mx={'auto'} bgColor={"#788AA3"} padding={'5%'} maxW={'60%'} minW={'60%'}>
                {/* <StarIcon color={"salmon"}>  </StarIcon> */}
                <Heading size={'md'} color={'white'} textAlign={'center'} paddingBottom={'30px'} maxW={'100%'} overflowWrap={'break-word'}>
                        {props.title}
                </Heading>
                <Heading color={'white'} fontSize={'lg'} paddingBottom={'30px'} textAlign={'center'}> {props.job} </Heading>
                <Text color={'white'} fontSize={'sm'} paddingBottom={'10px'} textAlign={'center'}> {props.desc}
                </Text>
            </Box>
        </div>
    )
}



export default function Research() {

    return (
        <section id="research">
            <FadeIn delay={1}>
                <Section title="RESEARCH" desc="" divideOnTop />
                <VStack spacing={10} paddingTop={'10px'}>
                    <Experience {...experience1} />
                    <Experience {...experience2} />
                    <Experience {...experience3} />
                </VStack>
            </FadeIn>
        </section>
    )
}