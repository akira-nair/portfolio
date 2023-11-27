import { Icon, VStack, Text, Highlight, Heading, Box } from "@chakra-ui/react";
import Section from "./section";
import { FadeIn } from "./utils/animations";

const publications = [
    "Golovanevsky, M., Schiller, E., Nair, A., Singh, R., &amp; Eickhoff, C. (2023, October 5). One-versus-others attention: Scalable multimodal integration. arXiv.org. https://doi.org/10.48550/arXiv.2307.05435",
    "Jelacic, S., Bowdle, A., Nair, B. G., Nair, A. A., Edwards, M., &amp; Boorman, D. J. (2023). Lessons from aviation safety: Pilot monitoring, the sterile flight deck rule, and aviation-style computerised checklists in the operating room. British Journal of Anaesthesia, 131(5), 796–801. https://doi.org/10.1016/j.bja.2023.08.001",
    "Nair, A. A., Velagapudi, M. A., Lang, J. A., Behara, L., Venigandla, et. al. (2020). Machine learning approach to predict postoperative opioid requirements in ambulatory surgery patients. PLOS ONE, 15(7). https://doi.org/10.1371/journal.pone.0236833",
    "Nair, A. A., Velagapudi, M., Behara, L., Venigandla, R., Fong, C. T., et. al. (2019). Hyper-G: An artificial intelligence tool for optimal decision-making and management of blood glucose levels in surgery patients. Methods of Information in Medicine, 58(02/03), 079–085. https://doi.org/10.1055/s-0039-1693731",
    "Velagapudi, M., Nair, A. A., Strodtbeck, W., Flynn, D. N., Howell, K., et. al. (2022). Evaluation of machine learning models as decision aids for anesthesiologists. Journal of Clinical Monitoring and Computing, 37(1), 155–163. https://doi.org/10.1007/s10877-022-00872-8"
]



export default function Publications() {

    return (
        <section id="publications">
            <FadeIn>
                <Section title="PUBLICATIONS" desc="" divideOnTop />
                <Box maxW={'80%'} mx='auto' bgColor={'#92B6B1'} padding={'30px'}>
                    <VStack verticalAlign={'true'}>
                        {publications.map((pub) => {
                            return (
                                <Text color={'white'} fontSize={'small'} paddingBottom={'10px'} key={pub}> {pub} </Text>
                            )
                        })}
                    </VStack>
                </Box>
            </FadeIn>
        </section>
    )
}