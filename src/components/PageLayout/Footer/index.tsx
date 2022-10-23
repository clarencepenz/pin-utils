/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {
  Flex,
  Drawer,
  Image,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  Link,
  Box,
  Text,
} from '@chakra-ui/react'

import colors from 'config/chakra/styles/colors'

import Links from './Links'

const Footer = () => {
  return (
    <Box position="relative">
      <Image h="full" position="absolute" src="/images/left-logo.png" />
      <Image h="full" position="absolute" right={0} src="/images/right-logo.png" />
      <Flex flexDirection="column" h="389px" bg="#052330" borderTop="1px solid rgba(255, 255, 255, 0.11)">
        <Links />
        <Flex my="18px" mx="55px" borderTop="1px solid rgba(255, 255, 255, 0.16)">
          <Box mr="auto" mt={4}>
            <Text color="#F9F9FB" fontSize="14px" fontWeight="400">
              © 2022 swap.xyz
            </Text>
          </Box>
          <Box display="flex" mt={4}>
            <Text color="#F9F9FB" fontSize="14px" fontWeight="400" mx={8}>
              Terms of Use
            </Text>
            <Text color="#F9F9FB" fontSize="14px" fontWeight="400">
              Privacy Policy
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
