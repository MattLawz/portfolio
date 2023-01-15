import Head from 'next/head';
import { Box, Button, Text, Heading, Stack, Container, Tag, Link, IconButton, Flex} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NextLink from 'next/link'
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
      marginTop="55vh"
      marginBottom="35vh"
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
              VSearch
            </Text>
          </Stack>
          <Box fontSize="sm" mt="6">
          VSearch is a simple search engine that allows you to search for threads on V3rmillion forum. It&apos;s simple and easy to use.
          </Box>
          <Container mt="6">
            {['Multiple Options', 'Simple', 'Accurate'].map((tag) => (
              <Tag key={tag} color="inherit" px="3" m="1">
                {tag}
              </Tag>
            ))}
          </Container>
          </Box>
      </Stack>
      <Link href="https://search.mattlawz.dev/" as={NextLink} isExternal passHref variant="skills">
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
          <Flex justifyContent="flex-end" m="-5">
            <Link href="https://github.com/MattLawz/portfolio" as={NextLink} isExternal passHref variant="skills">
          <IconButton aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            </Link>
          </Flex>
            <Text as="h2" fontWeight="bold" fontSize="xl">
              Portfolio
            </Text>
          </Stack>
          <Box fontSize="sm" mt="6">
        My portfolio that uses NextJs 13, Chakra-UI, Typescript and more! It&apos;s simple and easy to use. Open source & comes with contact form.
          </Box>
          <Container mt="6">
            {['NextJS 13', 'Contact Form', 'Minimalist'].map((tag) => (
              <Tag key={tag} color="inherit" px="3" m="1">
                {tag}
              </Tag>
            ))}
          </Container>
          </Box>
      </Stack>
      <Link href="https://mattlawz.dev" as={NextLink} isExternal passHref variant="skills">
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

