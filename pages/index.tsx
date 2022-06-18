import Head from "next/head"
import Link from "next/link"
import Container from '../components/Container'
import { Avatar, VStack, Center, Heading, Button, Text, useToast, Spacer, Alert, AlertIcon, AlertTitle, AlertDescription} from "@chakra-ui/react"
import { FaGithub, FaEnvelope, FaCode, FaDiscord, FaShoppingCart } from "react-icons/fa";

    
export default function Home() {
    const toast = useToast()
  return (
    <>
      <Head>
  <title>Matt Lawz</title>
  <link rel="icon" href="/dave.jpg" />
  <meta name="og:type" content="website" />
  <meta charSet="UTF-8" />
  <meta name="description" content="MattLawz website." />
  <meta name="keywords" content="NextJs, ChakraUI" />
  <meta name="author" content="MattLawz" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="og:image" content="/floppa.png" />
  <meta name="theme-color" content="#337ab7" />
    </Head>
    <Container />
    <Center>
    <VStack spacing={4}>
    <Avatar size="2xl" name="MattLawz" src="./dave.jpg" />
    {" "}
    <Heading>MattLawz</Heading>
    <Text>Fullstack Developer</Text>
    <Text maxW={550}>👋 Hey, I'm Matt, I&apos;m a self-taught software engineer based in The United States. I&apos;m currently working freelance as a software engineer. My specialty is frontend development using many great scalable technologies.</Text>
    <Spacer>

</Spacer>
    <Link href="https://github.com/MattLawz">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaGithub />}>GitHub</Button>
      </a>
    </Link>

    <Link href="https://mattlawz.dev/discord.txt">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaDiscord />}>Discord</Button>
      </a>
    </Link>

    <Link href="https://mattlawz.sellix.io/">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaShoppingCart />}>Shop</Button>
      </a>
    </Link>

    <Link href="mailto:matt@mattlawz.dev">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaEnvelope />}>Email</Button>
      </a>
    </Link>

    <Button width="350px" leftIcon={<FaCode />} onClick={() =>
        toast({
          title: "Tech",
          description: " HTML, CSS, PHP, TypeScript, Lua, C#, Chakra UI",
          status: "info",
          duration: 9000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Languages & Technologies</Button>

<Spacer>

</Spacer>

<Alert status='info' maxW={550}>
    <AlertIcon />
    New portfolio coming soon!
      </Alert>

</VStack>
</Center>
    </>
  )
}
