import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    Heading,
    Stack,
    useDisclosure,
    Hide,
    Link 
  } from '@chakra-ui/react';
  import DarkModeSwitch from './DarkModeSwitch';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { FaHome, FaRocket, FaUser, FaEnvelope } from "react-icons/fa";
  import NextLink from 'next/link';
  
    export const Nav = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      return (
        <>
        <Box as="section" pb={{ base: '12', md: '24' }} sx={{ position: 'sticky', top: '0', zIndex: 10 }}>
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('xs', 'xs-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          <Flex alignItems={'center'} justifyContent={'space-around'}>
          <HStack spacing="10" justify="space-between">
            <Link href="/" as={NextLink} isExternal legacyBehavior passHref>
            <Heading as='h3' size='sm'>
           mattlawz.dev
         </Heading>
          </Link>
            </HStack>
            <Flex alignItems={'center'}>
              <HStack spacing="3">
                    <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
              <Hide below='md'>
              <Link href="/" as={NextLink} passHref legacyBehavior>
            <IconButton variant="ghost" aria-label='Home' icon={<FaHome />} />
              </Link>
              <Link href="/projects" as={NextLink} passHref legacyBehavior>
            <IconButton variant="ghost" aria-label='Projects' icon={<FaRocket />} />
            </Link>
            <Link href="/about" as={NextLink} passHref legacyBehavior>
            <IconButton variant="ghost" aria-label='About' icon={<FaUser />} />
            </Link>
            <Link href="/contact" as={NextLink} passHref legacyBehavior>
            <IconButton variant="ghost" aria-label='Contact' icon={<FaEnvelope />} />
            </Link>
            </Hide>
                    <DarkModeSwitch />
                  </HStack>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box py={6} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
              <Link href="/" as={NextLink} passHref legacyBehavior>
                <Button variant="link">Home</Button>
              </Link>
              <Link href="/projects" as={NextLink} passHref legacyBehavior>
                <Button variant="link">Projects</Button>
              </Link>
              <Link href="/about" as={NextLink} passHref legacyBehavior>
                <Button variant="link">About</Button>
              </Link>

              </Stack>
            </Box>
          ) : null}
        </Container>
        </Box>
      </Box>
      </>
      )
    }
  
  export default Nav