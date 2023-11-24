import React from "react"
import Navbar from "./components/navbar"
import Section from "./components/section"
import About from "./components/about"
import { Box, ChakraProvider } from "@chakra-ui/react"
export default function Home() {
  return (
    <main>
      <ChakraProvider>
      <Box bg="#666a86" minHeight="100vh" p={10} alignItems={'center'}>
      <Navbar />
      <About />
      <Section title="" desc="Hi, my name is Akira Nair. I am a senior at Brown University studying Computer Science under the Computational Biology and Artificial Intelligence tracks. I am interested in leveraging AI and software to accelerate our understanding of human biology and ultimately create effective solutions to treat disease."></Section>
      </Box>
      </ChakraProvider>
    </main>
  )
}
