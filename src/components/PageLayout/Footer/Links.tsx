/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { FaTwitter, FaInstagram, FaMedium, FaDiscord, FaReddit } from 'react-icons/fa'
import { RiTelegramLine } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'

import colors from 'config/chakra/styles/colors'
// import Link from 'next/link';

import SidebarGroup from './FooterGroup'
import SidebarLinksContainer from './FooterLinksContainer'
import SidebarLink from './FooterLink'

const groups = [
  {
    isExternal: false,
    path: '/',
    name: 'Swap',
    toBeReleased: false,
  },
  {
    isExternal: false,
    path: '/',
    name: 'Farms',
    toBeReleased: false,
  },
  {
    isExternal: false,
    path: '/',
    name: 'Pools',
    toBeReleased: false,
  },
  {
    isExternal: false,
    path: '/',
    name: 'Lottery',
    toBeReleased: false,
  },
]

const SocialMedia: React.FC = () => {
  return (
    <Flex justify="flex-start" my={4} h="100%">
      <Link href="/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="rgba(255, 255, 255, 0.05)"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <FaTwitter color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>{' '}
      <Link href="/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="rgba(255, 255, 255, 0.05)"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <RiTelegramLine color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>{' '}
      <Link href="/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="rgba(255, 255, 255, 0.05)"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <AiFillInstagram color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>
      <Link href="/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="rgba(255, 255, 255, 0.05)"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <FaReddit color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>
      <Link href="/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="rgba(255, 255, 255, 0.05)"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <BsMedium color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>
      <Link href="/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="rgba(255, 255, 255, 0.05)"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <FaDiscord color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>
    </Flex>
  )
}

const Links: React.FC<{ [x: string]: any }> = ({ ...props }) => {
  return (
    <Flex flex={1} mt={4}>
      <Flex
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        p={4}
        w="100%"
        mx="auto"
        color="white"
        justifyContent="center"
        {...props}
      >
        <Flex justifyContent="center">
          <Flex flexDirection="column" alignItems="center">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Image
                p={2}
                display={{ base: 'block', lg: 'block' }}
                src="/images/footer-button.png"
                alt="footer Logo"
                h={{ base: '65px', lg: '65px' }}
              />
            </Link>
            <SidebarLinksContainer>
              {groups.map((link) => (
                <SidebarLink
                  isExternal={link.isExternal}
                  pathname={link.path}
                  isToBeReleased={link.toBeReleased}
                  key={link.name}
                >
                  {link.name}
                </SidebarLink>
              ))}
            </SidebarLinksContainer>
            <Box className="mt-4">
              <SocialMedia />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Links
