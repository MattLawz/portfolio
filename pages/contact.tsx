import Head from 'next/head';
import { Box, Heading, Stack, Container, Button, FormControl, FormLabel, FormErrorMessage, Input, useBreakpointValue, useColorModeValue, Textarea, useToast } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

interface FormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

export default function Home() {
    const toast = useToast()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: Yup.object({
        name: Yup.string().required('Name Required').min(3, 'Name must be at least 3 characters'),
        email: Yup.string().required('Email Required').min(5, 'Email must be at least 5 characters'),
        subject: Yup.string().required('Subject Required').min(5, 'Subject must be at least 5 characters'),
        message: Yup.string().required('Message Required').min(20, 'Message must be at least 20 characters'),
        }),
        onSubmit: ( values ) => {

 

            }
          
    })
    const handleSubmit = async (values: FormValues & { [key: string]: unknown }) => {
      try {
        emailjs.send('service_z70kyt5', 'template_y0qh8td', values, '5iV6j5pTqVrKIwRQk')
          toast({
          title: 'Message Sent',
          description: "I will get back to you within 24 hours. Thank you for your message.",
          status: 'success',
          duration: 9000,
          isClosable: false,
          position: 'bottom'
        })
        alert('Message Sent - I will get back to you within 24 hours. Thank you for your message.')
      } catch (err) {
        toast({
          title: 'Could Not Send Message',
          description: "There was an error sending your message. Please try again later.",
          status: 'error',
          duration: 9000,
          isClosable: false,
          position: 'bottom'
        })
        console.error('Failed to send message. Error: ', err)
      }
    }
  
    // I know the issue about the toast not appearing because the page reloads. I plan to fix this in the future.
    
  
  return (
    <>
      <Head>
      <link rel="shortcut icon" href="/forge.png" />
     <title>MattLawz</title>
      </Head>
        <Navbar />
        <Container maxW="lg" px={{ base: '0', sm: '8' }}>
    <Stack spacing="8">
      <Stack spacing="6">


        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
            Contact Me
          </Heading>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
        as="form"
        onSubmit={() => {handleSubmit(formik.values)}}
      >
        <Stack spacing="6">
          <Stack spacing="5">

            <FormControl isInvalid={!!formik.errors.name && formik.touched.name} isRequired>
              <FormLabel>Name</FormLabel>
              <Input id="name" type="text" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!formik.errors.email && formik.touched.email} isRequired>
              <FormLabel>Email</FormLabel>
              <Input id="email" type="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!formik.errors.subject && formik.touched.subject} isRequired>
              <FormLabel>Subject</FormLabel>
              <Input id="subject" type="text" onChange={formik.handleChange} value={formik.values.subject} onBlur={formik.handleBlur} />
              <FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!formik.errors.message && formik.touched.message} isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea id="message" resize="vertical" maxH="xs" onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur} />
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
            </FormControl>

          </Stack>
          <Stack spacing="6">
            <Button type="submit" variant="primary">Send</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>

    <Footer />
    </>
  )
}


