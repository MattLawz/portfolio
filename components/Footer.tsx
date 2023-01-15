import { ButtonGroup, Container, IconButton, Stack, Text, Divider, Link } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'
import Image from 'next/image'
import NextLink from 'next/link'

export const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }} mt="48">
    <Divider my="10" />
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Image src="/forge.png" alt="logo" width={25} height={25} />
        <ButtonGroup variant="ghost">
         <Link href="https://github.com/MattLawz" as={NextLink} isExternal passHref variant="skills">
          <IconButton aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
         </Link>
         <Link href="https://discordapp.com/users/899738671350165505" as={NextLink} isExternal passHref variant="skills">
          <IconButton
            aria-label="Discord"
            icon={<SiDiscord fontSize="1.25rem" />}
          />
        </Link>
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} MattLawz, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
)  

export default Footer