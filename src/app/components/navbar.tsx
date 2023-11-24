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
} from '@chakra-ui/react'

interface NavItem {
    label: string
    href?: string
    }
    
const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'About',
    },
    {
        label: 'Research',
    },
    {
        label: 'Publications',
    },
    {
        label: 'Contact',
    },
]

export default function Navbar() {
    return (
      <Box width="100%" >
        <Flex
          minH={'70px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
        //   borderBottom={2}
        //   borderStyle={'solid'}
          align={'center'}
        >
        <HStack w={'100%'} justifyContent="space-between">
            <Text fontSize="30" fontWeight="bold" color={'white'} letterSpacing={5}>
                AKIRA NAIR
            </Text>
            <HStack spacing={20}>
                {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Text fontWeight="light" color={'white'}>{navItem.label}</Text>
                </Box>
                ))}
            </HStack>
        </HStack>
        </Flex>
      </Box>
    );
  }
