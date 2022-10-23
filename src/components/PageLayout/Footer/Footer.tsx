import { Box, Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'
import colors from 'config/chakra/styles/colors'
import { FaTwitter, FaTelegram, FaMedium, FaDiscord } from 'react-icons/fa'

const SocialMedia: React.FC = () => {
  return (
    <Flex justify="flex-start" my={4} h="100%">
      <Link href="/" mr="4" ml={2}>
        <FaTwitter color={colors.default} fontSize="25px" />
      </Link>{' '}
      <Link href="/" mr="4">
        <FaTelegram color={colors.default} fontSize="25px" />
      </Link>{' '}
      <Link href="/" mr="4">
        <FaMedium color={colors.default} fontSize="25px" />
      </Link>
      <Link href="/" mr="4">
        <FaDiscord color={colors.default} fontSize="25px" />
      </Link>
    </Flex>
  )
}

const Footer = () => {
  return (
    <Flex bg={colors.primary} border="none">
      <Flex py={12} margin="auto" justifyContent="center">
        <Flex>
          <Box>
            <Image
              p={2}
              display={{ base: 'none', lg: 'block' }}
              src="/images/dexologo_3.png"
              alt="Dexo Logo"
              h={{ base: '65px', lg: '65px' }}
            />
            <div className="mt-4">
              <SocialMedia />
            </div>
            <div className="mt-3">
              <p className="font-sm fw-normal color-white">Copyright © 2022 DEXO. All Rights Reserved.</p>
            </div>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
