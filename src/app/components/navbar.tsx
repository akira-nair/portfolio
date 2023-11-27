'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
  Link,
  VStack,
} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
// import {HashLink} from 'react-router-hash-link'

interface NavItem {
    label: string,
    hashlink: string,
    href?: string
    }
    
const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'About',
        hashlink: '#about'
    },
    {
        label: 'Research',
        hashlink: '#research'
    },
    {
        label: 'Publications',
        hashlink: '#publications'
    },
    {
        label: 'Contact',
        hashlink: '#contact'
    },
]




export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Box width="100%">
      <Flex minH={'70px'} py={{ base: 2 }} px={{ base: 4 }} align={'center'}>
        <HStack w={'100%'} justifyContent="space-between">
          <Text fontSize="30" fontWeight="bold" color={'white'} letterSpacing={5}>
            AKIRA NAIR
          </Text>
          <HStack spacing={20} display={{ base: 'none', md: 'flex' }}>
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label}>
                <ChakraLink href={navItem.hashlink}>
                  <Text fontWeight="light" color={'white'}>
                    {navItem.label}
                  </Text>
                </ChakraLink>
              </Box>
            ))}
          </HStack>
          {/* Toggle menu button for smaller screens */}
          <Box display={{ base: 'flex', md: 'none' }}>
            <Text
              fontSize="xl"
              color="white"
              cursor="pointer"
              onClick={toggleMenu}
            >
              Menu <HamburgerIcon />
            </Text>
          </Box>
        </HStack>
      </Flex>
      {/* Responsive menu for smaller screens */}
      {isMenuOpen && (
        <Box bg="gray.700" p={4} display={{ base: 'flex', md: 'none' }}>
          <VStack spacing={4} align="start">
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label}>
                <ChakraLink href={navItem.hashlink}>
                  <Text fontWeight="light" color={'white'}>
                    {navItem.label}
                  </Text>
                </ChakraLink>
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
}

