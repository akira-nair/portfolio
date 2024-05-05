import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const myTheme = extendTheme({
    fonts: {
        body: "'Lekton', sans-serif",
        heading: "'Lekton', sans-serif",
        // You can specify different fonts for different parts of your UI as needed
    },
    colors: {
        c1: '#FFB6BE',
        c2: '#060E36',
        c3: '#FAA629',
        c4: '#192152'
    },
})