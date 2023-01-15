import Head from 'next/head';
import Image from 'next/image';
import { Box, Button, Text, Heading, Stack, Container, HStack, Tag, TagLeftIcon, Link, Flex, IconButton } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NextLink from 'next/link'
import { SiNextdotjs, SiTypescript, SiJavascript, SiChakraui, SiTailwindcss, SiCodeforces } from "react-icons/si";
import { Card } from '../components/Card';
import Footer from '../components/Footer';
import { FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Head>
      <link rel="shortcut icon" href="/forge.png" />
     <title>MattLawz</title>
      </Head>
        <Navbar />
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="40vh"
    >
    <Stack>
  <Heading as='h3' size='xl'>
    Hello! I&apos;m Matt. 👋
  </Heading>
  <Text fontSize='2xl'>I am a fullstack developer that builds scalable and performant web applications.</Text>
  </Stack>
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      marginTop="10vh"
      height="20vh"
    >
        <Stack>
      <Heading as='h2' size='lg'>
    Tech Stack
    </Heading>
    <HStack spacing="2">
    <Container maxW='container.md'>
    <Link href="https://nextjs.org/" as={NextLink} isExternal passHref variant="skills">
    <Tag colorScheme='blue' variant='outline' m="1.5"><TagLeftIcon boxSize='12x' as={SiNextdotjs} />NextJS</Tag>
    </Link>
    <Link href="https://www.typescriptlang.org/" as={NextLink} isExternal passHref variant="skills">
    <Tag colorScheme='blue' variant='outline' m="1.5"><TagLeftIcon boxSize='12px' as={SiTypescript} />TypeScript</Tag>
    </Link>
    <Link href="https://www.javascript.com/" as={NextLink} isExternal passHref variant="skills">
    <Tag colorScheme='blue' variant='outline' m="1.5"><TagLeftIcon boxSize='12px' as={SiJavascript} />JavaScript</Tag>
    </Link>
    <Link href="https://chakra-ui.com/" as={NextLink} isExternal passHref variant="skills">
    <Tag colorScheme='blue' variant='outline' m="1.5"><TagLeftIcon boxSize='12px' as={SiChakraui} />Chakra-UI</Tag>
    </Link>
    <Link href="https://tailwindcss.com/" as={NextLink} isExternal passHref variant="skills">
    <Tag colorScheme='blue' variant='outline' m="1.5"><TagLeftIcon boxSize='12px' as={SiTailwindcss} />TailwindCSS</Tag>
    </Link>
    <Tag colorScheme='blue' variant='outline' m="1.5"><TagLeftIcon boxSize='12px' as={SiCodeforces} />& Others</Tag>
    </Container>
    </HStack>
    </Stack>
    </Box>

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      marginTop="30vh"
      height="40vh"
    >
        <Stack>
      <Heading as='h2' size='lg'>
    Projects
    </Heading>

    <Box as="section">
    <Card mt="6">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '3', md: '10' }}
        alignItems="center"
      >
        <Box>
          <Stack spacing={{ base: '1', md: '2' }}>
          <Flex justifyContent="flex-end" m="-5">
            <Link href="https://github.com/MattLawz/coinworks" as={NextLink} isExternal passHref variant="skills">
          <IconButton aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            </Link>
          </Flex>
            <Text as="h2" fontWeight="bold" fontSize="xl">
              Coinworks
            </Text>
          </Stack>
          <Box fontSize="sm" mt="6">
          A website that allows you to make your own custom crypto donation link! No login or registration is needed, comes with many cool features.
          </Box>
          <Container mt="6">
            {['Crypto', 'QRCode', 'No Login'].map((tag) => (
              <Tag key={tag} color="inherit" px="3" m="1">
                {tag}
              </Tag>
            ))}
          </Container>
          </Box>
      </Stack>
      <Link href="https://coinworks.vercel.app/" as={NextLink} isExternal passHref variant="skills">
      <Button width="full" colorScheme="blue" mt="6">
            Visit Site
     </Button>
     </Link>
    </Card>
  </Box>

  <Box as="section">
    <Card mt="6">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '3', md: '10' }}
        alignItems="center"
      >
        <Box>
          <Stack spacing={{ base: '1', md: '2' }}>
            <Text as="h2" fontWeight="bold" fontSize="xl">
              Link Page
            </Text>
          </Stack>
          <Box fontSize="sm" mt="6">
          Small link page that allows you to shorten your links and share them with your friends! Can be customized to your liking.
          </Box>
          <Container mt="6">
            {['Simple', 'Quick', 'Customizable'].map((tag) => (
              <Tag key={tag} color="inherit" px="3" m="1">
                {tag}
              </Tag>
            ))}
          </Container>
          </Box>
      </Stack>
      <Link href="https://custom-link-page.vercel.app/" as={NextLink} isExternal passHref variant="skills">
      <Button width="full" colorScheme="blue" mt="6">
            Visit Site
     </Button>
     </Link>
    </Card>
  </Box>
    </Stack>
    </Box>

    <Footer />
    </>
  )
}

