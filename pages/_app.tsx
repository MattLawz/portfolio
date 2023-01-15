import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import config from '../styles/theme';
import { theme } from '../styles/index'; 
import "@fontsource/outfit";
import "@fontsource/recursive";

function App({ Component, pageProps }: AppProps) {
    const myTheme = extendTheme(
        theme,
        config,
      )
  return(
    <ChakraProvider theme={myTheme}>
   <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
