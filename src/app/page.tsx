"use client";
import React from "react"
import Navbar from "./components/navbar"
import Section from "./components/section"
import About from "./components/about"
import { Box, ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import Research from "./components/research";
import Publications from "./components/publications";
import Contact from "./components/contact";
export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <Box bg="#666a86" minHeight="100vh" p={10} alignItems={'center'}>
          <Navbar />
          <About />
          <Research />
          <Publications />
          <Contact />
        </Box>
      </ChakraProvider>
    </main>
  )
}
