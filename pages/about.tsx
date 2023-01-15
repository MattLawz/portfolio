import Head from 'next/head';
import { Box, Text, Heading, Stack, Container, IconButton, HStack, Divider, Link  } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SiGithub, SiDiscord, SiBuymeacoffee } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import NextLink from 'next/link'

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
      marginTop="10vh"
      height="40vh"
    >
    <Container maxW='container.md'>
    <Stack spacing="12">
  <Heading as='h3' size='xl'>
    Hey! How are you? 👋
  </Heading>
  <Text fontSize='2xl'>I&apos;m Matt, a fullstack web developer living inside the US. Outside of coding I like working on cars, listening to music, sportsbetting and more. </Text>
  <Divider />
  <HStack spacing="2" justifyContent="center">
  <Link href="https://github.com/MattLawz" as={NextLink} isExternal>
    <IconButton
  colorScheme='blue'
  aria-label='GitHub'
  icon={<SiGithub />}
/>
</Link>
<Link href="https://discordapp.com/users/899738671350165505" as={NextLink} isExternal>
<IconButton
  colorScheme='blue'
  aria-label='Discord'
  icon={<SiDiscord />}
/>
</Link>
<Link href="https://www.buymeacoffee.com/devmatt" as={NextLink} isExternal>
<IconButton
  colorScheme='blue'
  aria-label='BuyMeACoffee'
  icon={<SiBuymeacoffee />}
/>
</Link>
<Link href="mailto:matt@mattlawz.dev" as={NextLink} isExternal>
<IconButton
  colorScheme='blue'
  aria-label='EMail'
  icon={<IoMdMail />}
/>
</Link>
    </HStack>
  </Stack>
    </Container>
    </Box>

    <Footer />
    </>
  )
}

