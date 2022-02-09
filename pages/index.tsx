import Head from "next/head"
import Link from "next/link"
import Container from '../components/Container'
import { Avatar, VStack, Center, Heading, Button, Text, useToast, Spacer} from "@chakra-ui/react"
import { FaGithub, FaEnvelope, FaCode, FaDiscord } from "react-icons/fa";

    
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
  <script async src="https://arc.io/widget.min.js#Zn9FDne2"></script>
    </Head>
    <Container />
    <Center>
    <VStack spacing={4}>
    <Avatar size="2xl" name="MattLawz" src="./dave.jpg" variant='outline' colorScheme='black' />
    {" "}
    <Heading>MattLawz</Heading>
    <Text>Fullstack Developer</Text>
    <Text>Please know that I am very busy and I may not get back to you right away</Text>
    <Spacer>

</Spacer>
    <Link href="https://github.com/MattLawz">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaGithub />} variant='outline' colorScheme='black' onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>GitHub</Button>
      </a>
    </Link>

    <Link href="https://mattlawz.dev/discord.txt">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaDiscord />} variant='outline' colorScheme='black' onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Discord</Button>
      </a>
    </Link>

    <Link href="mailto:matt@mattlawz.dev">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaEnvelope />} variant='outline' colorScheme='black' onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Email</Button>
      </a>
    </Link>

    <Button width="350px" leftIcon={<FaCode />} variant='outline' colorScheme='black' onClick={() =>
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
<Text fontSize='xs' as='i'>I am in no way shape or form affiliated with Megadeth or Dave Mustaine, I am just a fan of them and decided to use the cool picture</Text>

</VStack>
</Center>
    </>
  )
}
